# Logoyu, düzeltilmiş mockup'ın piksel koordinatlarında üretir.
import sys, math, json
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen

FD = "/Users/nkm/Desktop/Ertuğrul/atiklawoffice/node_modules/@fontsource"
P = json.loads(sys.argv[1]) if len(sys.argv) > 1 else {}

def fonts(*files):
    return [TTFont(f"{FD}/{f}") for f in files]

def glyph(fs, ch):
    for f in fs:
        name = f.getBestCmap().get(ord(ch))
        if name:
            return f, name
    raise KeyError(ch)

def cap_height(fs):
    f, n = glyph(fs, "H")
    bp = BoundsPen(f.getGlyphSet()); f.getGlyphSet()[n].draw(bp)
    return bp.bounds[3]

def text_path(fs, s, x0, baseline, cap, track):
    """Harfleri sırayla dizer; cap = büyük harf yüksekliği (px), track = harf arası ek boşluk (px)."""
    scale = cap / cap_height(fs)
    out, x = [], x0
    for ch in s:
        if ch == " ":
            f, n = glyph(fs, " ")
            x += f["hmtx"][n][0] * scale + track
            continue
        f, n = glyph(fs, ch)
        gs = f.getGlyphSet()
        pen = SVGPathPen(gs, ntos=lambda v: f"{v:.1f}")
        gs[n].draw(TransformPen(pen, (scale, 0, 0, -scale, x, baseline)))
        out.append(pen.getCommands())
        x += f["hmtx"][n][0] * scale + track
    return " ".join(out), x - track

def measure(fs, s, cap, track):
    return text_path(fs, s, 0, 0, cap, track)[1]

cinzel = fonts("cinzel/files/cinzel-latin-400-normal.woff", "cinzel/files/cinzel-latin-ext-400-normal.woff")
mont = fonts("montserrat/files/montserrat-latin-300-normal.woff", "montserrat/files/montserrat-latin-ext-300-normal.woff", "montserrat/files/montserrat-cyrillic-300-normal.woff")

# --- A (çapraz çizgisiz, sol bacak ince, sağ bacak kalın, tırnaklı ayaklar)
A = P.get("A", {})
ax, ay = A.get("apex", [251, 93])
ix, iy = A.get("inner", [241, 150])
base = A.get("base", 360)
a_path = ("M{ax} {ay} L{ro} {b2} L{rf} {base} L{rfi} {base} L{rii} {b3} "
          "L{ix} {iy} L{lii} {b3} L{lfi} {base} L{lf} {base} L{lo} {b2} Z").format(
    ax=ax, ay=ay, ix=ix, iy=iy, base=base,
    ro=A.get("ro", 376), b2=base - 9, rf=A.get("rf", 392), rfi=A.get("rfi", 298),
    rii=A.get("rii", 307), b3=base - 13, lii=A.get("lii", 160), lfi=A.get("lfi", 172),
    lf=A.get("lf", 112), lo=A.get("lo", 135))

# --- Halka: elips üzerindeki üç yay
R = P.get("ring", {})
cx, cy, rx, ry = R.get("c", [244, 232]) + R.get("r", [151, 121])
sw = R.get("sw", 9)
def pt(deg):
    t = math.radians(deg)
    return cx + rx * math.cos(t), cy + ry * math.sin(t)
def arc(d0, d1):
    (x0, y0), (x1, y1) = pt(d0), pt(d1)
    large = 1 if (d1 - d0) % 360 > 180 else 0
    return f"M{x0:.1f} {y0:.1f} A{rx} {ry} 0 {large} 1 {x1:.1f} {y1:.1f}"
segs = R.get("segs", [[-74, 33], [68, 115], [139, 261]])
ring = " ".join(arc(a, b) for a, b in segs)

# --- Harf kutusuna oturtma: yatayda ölçülen genişliğe, dikeyde büyük harf yüksekliğine
def bbox(f, n):
    gs = f.getGlyphSet(); bp = BoundsPen(gs); gs[n].draw(bp); return bp.bounds
def fit(fs, ch, x0, x1, base, cap=None, full=None):
    f, n = glyph(fs, ch)
    xmin, ymin, xmax, ymax = bbox(f, n)
    sy = cap / cap_height(fs) if cap else full / ymax
    sx = (x1 - x0) / (xmax - xmin)
    gs = f.getGlyphSet(); pen = SVGPathPen(gs, ntos=lambda v: f"{v:.1f}")
    gs[n].draw(TransformPen(pen, (sx, 0, 0, -sy, x0 - xmin * sx, base)))
    return pen.getCommands()

tik = " ".join([
    fit(cinzel, "T", 460, 635, 352, cap=162),
    fit(cinzel, "İ", 684, 786, 352, full=166),
    fit(cinzel, "K", 830, 1080, 352, cap=162),
])
tik_end = 1080
L = P.get("line", {"x0": 82, "x1": 1078, "y": 416, "h": 4})
boxes = [("H",84,133),("U",165,217),("K",250,295),("U",323,378),("K",412,459),
         ("B",535,585),("Ü",618,679),("R",716,770),("O",801,882),("S",911,968),("U",1012,1072)]
sub = " ".join(fit(mont, ch, a, b, 513, cap=55) for ch, a, b in boxes)

def spread(txt, x0=84, x1=1072, top=458, cap=50, min_tr=0.32, max_tr=0.48):
    """Alt yazıyı çizgi genişliğine yayar; sığmazsa harf boyunu küçültür. Üst hizası sabit."""
    n = len(txt) - 1
    w0 = measure(mont, txt, cap, 0)
    need = w0 + cap * min_tr * n
    if need > x1 - x0:
        cap *= (x1 - x0) / need
        w0 = measure(mont, txt, cap, 0)
    tr = min((x1 - x0 - w0) / n, cap * max_tr)
    w = w0 + tr * n
    return text_path(mont, txt, x0 + (x1 - x0 - w) / 2, top + cap, cap, tr)[0]
subs = {"tr": spread("HUKUK & ARABULUCULUK"), "en": spread("LAW & MEDIATION"), "ru": spread("ПРАВО И МЕДИАЦИЯ")}
print(json.dumps({"A": a_path, "ring": ring, "ringSw": sw, "tik": tik, "tikEnd": tik_end,
                  "line": L, "sub": sub, "subs": subs}))
