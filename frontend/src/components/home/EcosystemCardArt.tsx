import type { ComponentType, CSSProperties } from "react";

/**
 * Sector line illustrations for the Business Ecosystem cards.
 * Every scene strokes in currentColor so each card tints it with its own accent.
 * Drawn on a 240×160 canvas, weighted to the bottom-right, away from card copy.
 */

const rad = (deg: number) => (deg * Math.PI) / 180;
const pt = (x: number, y: number) => `${x.toFixed(1)} ${y.toFixed(1)}`;
const polar = (cx: number, cy: number, r: number, deg: number): [number, number] => [
  cx + r * Math.cos(rad(deg)),
  cy + r * Math.sin(rad(deg)),
];

const soft = { fill: "currentColor", fillOpacity: 0.08 } as const;

/** Horizontal wave from chained quadratic segments; peaks sit at ±amp/2. */
function wave(x: number, y: number, amp: number, period: number, cycles: number) {
  const half = period / 2;
  return `M${pt(x, y)}q${period / 4} ${-amp} ${half} 0` + `t${half} 0`.repeat(cycles * 2 - 1);
}

/** Small clockwise arc between two angles on a circle. */
function arc(cx: number, cy: number, r: number, from: number, to: number) {
  return `M${pt(...polar(cx, cy, r, from))}A${r} ${r} 0 0 1 ${pt(...polar(cx, cy, r, to))}`;
}

/** Straight link between two node centres, trimmed so it stops at each node's rim. */
function link(x1: number, y1: number, x2: number, y2: number, r: number) {
  const len = Math.hypot(x2 - x1, y2 - y1);
  const ux = ((x2 - x1) / len) * r;
  const uy = ((y2 - y1) / len) * r;
  return `M${pt(x1 + ux, y1 + uy)}L${pt(x2 - ux, y2 - uy)}`;
}

/** Spur gear outline: flat-topped teeth joined by root arcs. */
function gear(cx: number, cy: number, root: number, tip: number, teeth: number, phase = 0) {
  const step = 360 / teeth;
  let d = "";
  for (let i = 0; i < teeth; i++) {
    const a = phase + i * step;
    d +=
      `${i === 0 ? "M" : "L"}${pt(...polar(cx, cy, root, a))}` +
      `L${pt(...polar(cx, cy, tip, a + step * 0.12))}` +
      `L${pt(...polar(cx, cy, tip, a + step * 0.42))}` +
      `L${pt(...polar(cx, cy, root, a + step * 0.54))}` +
      `A${root} ${root} 0 0 1 ${pt(...polar(cx, cy, root, a + step))}`;
  }
  return `${d}Z`;
}

/** Isometric box from its front-bottom corner: a = left depth, b = right depth, h = height. */
function isoBox(bx: number, by: number, a: number, b: number, h: number) {
  const at = (l: number, r: number, up: number): [number, number] => [
    bx - 0.866 * a * l + 0.866 * b * r,
    by - 0.5 * a * l - 0.5 * b * r - h * up,
  ];
  const face = (...corners: [number, number][]) => `M${corners.map((c) => pt(...c)).join("L")}Z`;
  return {
    at,
    left: face(at(0, 0, 0), at(1, 0, 0), at(1, 0, 1), at(0, 0, 1)),
    right: face(at(0, 0, 0), at(0, 1, 0), at(0, 1, 1), at(0, 0, 1)),
    top: face(at(0, 0, 1), at(1, 0, 1), at(1, 1, 1), at(0, 1, 1)),
    // packing tape along the top seam, folding down the front-right face
    tape: `M${pt(...at(1, 0.5, 1))}L${pt(...at(0, 0.5, 1))}L${pt(...at(0, 0.5, 0.62))}`,
  };
}

/* ── BharatX Infratech: cable-stayed bridge, arterial deck, industrial skyline ── */

const infraCables = [0, 1, 2, 3, 4]
  .map((i) => `M${60 + i * 24} 116L180 ${30 + i * 7}L${300 - i * 24} 116`)
  .join("");

function InfraArt() {
  return (
    <>
      <g strokeOpacity={0.55}>
        <rect x="10" y="82" width="16" height="34" {...soft} />
        <rect x="30" y="68" width="14" height="48" {...soft} />
        <rect x="48" y="90" width="18" height="26" {...soft} />
        <path d="M74 116V96l10-8v8l10-8v8l10-8v8l10-8v28" {...soft} />
        <rect x="120" y="72" width="6" height="44" {...soft} />
        <path d="M15 90h6M15 98h6M15 106h6M34 76h6M34 84h6M34 92h6M34 100h6M53 98h8M53 106h8" />
      </g>
      <path d={infraCables} strokeWidth={0.85} />
      <path d="M170 150 178 26h4l8 124" {...soft} />
      <path d="M173.2 100h13.6M175.8 60h8.4" />
      <rect x="-2" y="116" width="244" height="7" fill="currentColor" fillOpacity={0.14} />
      <path d="M0 119.5h240" strokeDasharray="5 5" strokeWidth={0.8} />
      <path d="M56 123v27M64 123v27M0 150h240" />
      <path d={wave(0, 155, 3.5, 16, 15)} strokeOpacity={0.6} />
      <path d={wave(8, 159.5, 2.8, 16, 15)} strokeOpacity={0.35} />
    </>
  );
}

/* ── BharatX Agro: sourced fields, storage silo, harvest-ready wheat ── */

const agroRows = [-90, -40, 10, 60, 110, 160, 210, 260, 310]
  .map((xb) => `M${pt(110 + (xb - 110) * 0.14, 102 + 58 * 0.14)}L${xb} 160`)
  .join("");

function Wheat({ x, top }: { x: number; top: number }) {
  const grains = [0, 1, 2, 3, 4].map((k) => top + 7 + k * 5.2);
  return (
    <g>
      <path d={`M${x} 160V${top + 4}`} />
      <path d={`M${x} ${top + 40}c-6-2-10-8-11-15c5 3 9 8 11 15`} {...soft} />
      <ellipse cx={x} cy={top + 2} rx="1.7" ry="3.6" {...soft} />
      {grains.map((y) => (
        <g key={y}>
          <ellipse cx={x - 2.8} cy={y} rx="1.8" ry="3.6" transform={`rotate(-30 ${x - 2.8} ${y})`} {...soft} />
          <ellipse cx={x + 2.8} cy={y} rx="1.8" ry="3.6" transform={`rotate(30 ${x + 2.8} ${y})`} {...soft} />
        </g>
      ))}
    </g>
  );
}

function AgroArt() {
  return (
    <>
      <circle cx="204" cy="50" r="10" fill="currentColor" fillOpacity={0.14} />
      <circle cx="204" cy="50" r="17" strokeDasharray="2 3" strokeOpacity={0.6} />
      <path d="M0 90Q55 72 112 82T240 76" strokeOpacity={0.5} />
      <path d="M0 104Q60 92 120 100T240 96V160H0Z" fill="currentColor" fillOpacity={0.06} stroke="none" />
      <path d="M0 104Q60 92 120 100T240 96" />
      <path d={agroRows} strokeWidth={0.85} strokeOpacity={0.75} />
      <path d="M150 103V66q7-10 14 0v37" {...soft} />
      <path d="M150 78h14M150 90h14" strokeOpacity={0.6} />
      <path d="M166 103V80l14-10 14 10v23" {...soft} />
      <path d="M175 103V90h10v13M175 90l10 13M185 90l-10 13" strokeOpacity={0.7} />
      <Wheat x={210} top={88} />
      <Wheat x={222} top={80} />
      <Wheat x={233} top={92} />
    </>
  );
}

/* ── BharatX Ventures: patient, compounding growth across generations ── */

const ventureBars = [12, 20, 30, 42, 57, 76, 98];
const venturePoints = ventureBars.map((h, i) => [84 + i * 22, 138 - h] as const);

function VenturesArt() {
  return (
    <>
      <path d="M60 52h180M60 76h180M60 100h180M60 124h180" strokeDasharray="1 5" strokeOpacity={0.45} />
      <path d="M204 160a36 36 0 0 1 36-36M176 160a64 64 0 0 1 64-64" strokeDasharray="2 4" strokeOpacity={0.4} />
      {ventureBars.map((h, i) => (
        <rect
          key={h}
          x={78 + i * 22}
          y={148 - h}
          width="12"
          height={h}
          rx="1.5"
          fill="currentColor"
          fillOpacity={0.06 + i * 0.02}
        />
      ))}
      <path d="M56 148h184" />
      <path d={`M${venturePoints.map(([x, y]) => pt(x, y)).join("L")}L231 25M223 25h8v8`} strokeWidth={1.4} />
      {venturePoints.map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="2.4" fill="currentColor" fillOpacity={0.35} />
      ))}
    </>
  );
}

/* ── BharatX Labs Foundation: climate R&D, earth observation, open telemetry ── */

function orbitPoint(deg: number): [number, number] {
  const x = 60 * Math.cos(rad(deg));
  const y = 17 * Math.sin(rad(deg));
  const t = rad(-16);
  return [186 + x * Math.cos(t) - y * Math.sin(t), 84 + x * Math.sin(t) + y * Math.cos(t)];
}

const [satX, satY] = orbitPoint(200).map((v) => Math.round(v * 10) / 10);
const telemetry = [146, 142, 145, 139, 142, 136, 140, 133, 137, 131, 134, 129].map(
  (y, i) => [60 + i * 16, y] as const,
);

function LabsArt() {
  return (
    <>
      <path
        d="M52 62c16-7 30 5 46-1s24-4 36 1M44 78c18-6 30 5 46 0s14-3 22 1M58 94c14-5 24 4 38-1"
        strokeOpacity={0.5}
      />
      <circle cx="186" cy="84" r="38" {...soft} />
      <ellipse cx="186" cy="84" rx="15" ry="38" />
      <ellipse cx="186" cy="84" rx="29" ry="38" strokeOpacity={0.6} />
      <ellipse cx="186" cy="84" rx="38" ry="8.5" />
      <ellipse cx="186" cy="63" rx="31.5" ry="6" strokeOpacity={0.6} />
      <ellipse cx="186" cy="105" rx="31.5" ry="6" strokeOpacity={0.6} />
      <ellipse cx="186" cy="84" rx="60" ry="17" transform="rotate(-16 186 84)" strokeDasharray="3 3" />
      <g transform={`rotate(-16 ${satX} ${satY})`}>
        <rect x={satX - 4} y={satY - 3} width="8" height="6" rx="1" fill="currentColor" fillOpacity={0.2} />
        <rect x={satX - 16} y={satY - 2.5} width="9" height="5" {...soft} />
        <rect x={satX + 7} y={satY - 2.5} width="9" height="5" {...soft} />
        <path
          d={`M${satX - 7} ${satY}h3M${satX + 4} ${satY}h3M${satX - 13} ${satY - 2.5}v5M${satX - 10} ${satY - 2.5}v5M${satX + 10} ${satY - 2.5}v5M${satX + 13} ${satY - 2.5}v5`}
          strokeWidth={0.6}
        />
        <path d={arc(satX, satY - 3, 7, -135, -45) + arc(satX, satY - 3, 11, -135, -45)} strokeOpacity={0.7} />
      </g>
      <path d="M56 152h184" strokeOpacity={0.35} />
      <path d={`M${telemetry.map(([x, y]) => pt(x, y)).join("L")}`} strokeWidth={1.3} />
      {telemetry.slice(5).map(([x, y], i) =>
        i % 2 === 0 ? <circle key={x} cx={x} cy={y} r="2.2" fill="currentColor" fillOpacity={0.35} /> : null,
      )}
    </>
  );
}

/* ── BharatX Engineering: heavy-duty swivel caster drawn as a precision drawing ── */

function CastersArt() {
  return (
    <>
      <path d={gear(118, 108, 20, 25, 12)} {...soft} />
      <circle cx="118" cy="108" r="8" />
      <circle cx="118" cy="108" r="3" fill="currentColor" fillOpacity={0.3} />
      <path d={gear(90, 84, 11, 15, 8, 12)} {...soft} />
      <circle cx="90" cy="84" r="4" />
      <path d="M150 124h12M146 132h14M152 140h10" strokeOpacity={0.6} />
      <rect x="170" y="56" width="50" height="6" rx="1.5" fill="currentColor" fillOpacity={0.16} />
      <circle cx="176.5" cy="59" r="1.3" />
      <circle cx="213.5" cy="59" r="1.3" />
      <path d="M182 62h26l-4 8h-18z" {...soft} />
      <circle cx="200" cy="114" r="31" {...soft} />
      <circle cx="200" cy="114" r="25" />
      <circle cx="200" cy="114" r="17" strokeDasharray="1.5 3" />
      <circle cx="200" cy="114" r="9" fill="currentColor" fillOpacity={0.14} />
      <path d="M186 70h18l6 40a10 10 0 0 1-20 0z" fill="currentColor" fillOpacity={0.1} />
      <circle cx="200" cy="114" r="3.5" fill="currentColor" fillOpacity={0.4} />
      <path d="M195 46v16M200 76v80M162 114h78" strokeDasharray="6 2 1 2" strokeWidth={0.7} strokeOpacity={0.6} />
      <path d="M124 145h116" />
      <path
        d="M169 153h62M169 150v6M231 150v6M169 153l4-2M169 153l4 2M231 153l-4-2M231 153l-4 2"
        strokeWidth={0.7}
        strokeOpacity={0.6}
      />
    </>
  );
}

/* ── Aixperts Labs: neural network wired into sovereign compute silicon ── */

const nnLayers = [
  { x: 72, ys: [76, 100, 124] },
  { x: 104, ys: [64, 88, 112, 136] },
  { x: 136, ys: [80, 100, 120] },
];
const nnEdges = nnLayers
  .slice(1)
  .flatMap((layer, i) => layer.ys.flatMap((y) => nnLayers[i].ys.map((py) => link(nnLayers[i].x, py, layer.x, y, 4.4))))
  .join("");
const chipPins = [0, 1, 2, 3, 4]
  .map((i) => `M${174 + i * 8} 78v-7M${174 + i * 8} 122v7M168 ${84 + i * 8}h-7M212 ${84 + i * 8}h7`)
  .join("");

function AixpertsArt() {
  return (
    <>
      <path d="M40 76h27.6M40 100h27.6M40 124h27.6" strokeOpacity={0.4} />
      <path d={nnEdges} strokeWidth={0.8} strokeOpacity={0.55} />
      {nnLayers.flatMap((layer) =>
        layer.ys.map((y) => (
          <circle key={`${layer.x}-${y}`} cx={layer.x} cy={y} r="3.6" fill="currentColor" fillOpacity={0.16} />
        )),
      )}
      <path d="M139.6 80H148l4 4h9M139.6 100H161M139.6 120H148l4-4h9M161 92h-4M161 108h-4" />
      <path d="M219 84h8l6-6h10M219 100h24M219 116h8l6 6h10M182 129v9l-6 6v16M190 129v31M198 129v11l6 6v14M190 71v-9l6-6h12" />
      <g fill="currentColor" fillOpacity={0.3}>
        <circle cx="155" cy="92" r="1.8" />
        <circle cx="155" cy="108" r="1.8" />
        <circle cx="233" cy="78" r="1.8" />
        <circle cx="233" cy="122" r="1.8" />
        <circle cx="176" cy="144" r="1.8" />
        <circle cx="204" cy="146" r="1.8" />
        <circle cx="210" cy="56" r="1.8" />
      </g>
      <path d={chipPins} />
      <rect x="168" y="78" width="44" height="44" rx="4" fill="currentColor" fillOpacity={0.1} />
      <rect x="178" y="88" width="24" height="24" rx="2" />
      <path d="M190 92q1 7 8 8q-7 1-8 8q-1-7-8-8q7-1 8-8z" fill="currentColor" fillOpacity={0.25} />
    </>
  );
}

/* ── BharatX Enterprises: sustainable corrugated packaging ── */

const boxBig = isoBox(196, 150, 40, 34, 42);
const boxMid = isoBox(138, 150, 30, 26, 30);
const boxSmall = isoBox(92, 150, 22, 20, 22);
const [leafX, leafY] = boxBig.at(0.5, 0, 0.5);
const thisSideUp = [0.68, 0.84]
  .map((r) => `M${pt(...boxBig.at(0, r, 0.18))}v-9m-2.5 2.5l2.5-2.5 2.5 2.5`)
  .join("");

function PackagingArt() {
  return (
    <>
      {[boxSmall, boxMid, boxBig].map((box, i) => (
        <g key={i} strokeOpacity={i === 0 ? 0.6 : 1}>
          <path d={box.left} fill="currentColor" fillOpacity={0.1} />
          <path d={box.right} fill="currentColor" fillOpacity={0.05} />
          <path d={box.top} fill="currentColor" fillOpacity={0.14} />
        </g>
      ))}
      <path d={boxBig.tape + boxMid.tape} strokeWidth={3} strokeOpacity={0.4} strokeLinecap="butt" />
      <g transform={`matrix(0.866 0.5 0 1 ${pt(leafX, leafY)})`}>
        <path d="M-7 5C-7-4 0-8 8-7C8 2 2 6-7 5Z" fill="currentColor" fillOpacity={0.18} />
        <path d="M-7 5L5-4" />
      </g>
      <path d={thisSideUp} strokeWidth={0.9} />
      <path d="M56 153h184M56 159.5h184" />
      <path d={wave(56, 156.25, 6, 7, 27)} strokeWidth={0.9} />
    </>
  );
}

/* ── Circular economy: resource recovery loop, zero-effluent clean water ── */

const loopArcs = [-80, 40, 160]
  .map((start) => {
    const end = start + 96;
    const [x2, y2] = polar(180, 92, 38, end);
    const tx = -Math.sin(rad(end));
    const ty = Math.cos(rad(end));
    const nx = Math.cos(rad(end));
    const ny = Math.sin(rad(end));
    const head = (side: number) => pt(x2 - tx * 7 + nx * 4.5 * side, y2 - ty * 7 + ny * 4.5 * side);
    return `${arc(180, 92, 38, start, end)}M${head(1)}L${pt(x2, y2)}L${head(-1)}`;
  })
  .join("");

function SustainabilityArt() {
  return (
    <>
      <path d="M70 146V124l10-6v6l10-6v6l10-6v28z" {...soft} strokeOpacity={0.6} />
      <rect x="104" y="106" width="6" height="40" {...soft} strokeOpacity={0.6} />
      <path d="M60 146h56" strokeOpacity={0.6} />
      <path d="M114 120c10-4 18-10 26-18" strokeDasharray="3 3" />
      <path d="M134 102h6v6" />
      <path d={loopArcs} strokeWidth={1.5} />
      <path d="M166 106C164 86 178 76 196 78C197 96 184 108 166 106Z" fill="currentColor" fillOpacity={0.14} />
      <path d="M166 106C174 98 182 90 190 84M175 99l-1-7M182 93l-1-6M181 95l6 1" strokeWidth={0.9} />
      <g fill="currentColor" fillOpacity={0.3} stroke="none">
        {[-20, 100, 220].map((a) => {
          const [x, y] = polar(180, 92, 50, a);
          return <circle key={a} cx={x} cy={y} r="2.2" />;
        })}
      </g>
      <path d="M228 110s-9 11-9 17a9 9 0 0 0 18 0c0-6-9-17-9-17z" fill="currentColor" fillOpacity={0.14} />
      <ellipse cx="228" cy="150" rx="13" ry="2.6" strokeOpacity={0.6} />
      <ellipse cx="228" cy="150" rx="6.5" ry="1.3" strokeOpacity={0.6} />
      <path d={wave(56, 153, 3, 16, 12)} strokeOpacity={0.5} />
      <path d={wave(64, 158, 2.4, 16, 12)} strokeOpacity={0.3} />
    </>
  );
}

const scenes: Record<string, ComponentType> = {
  infra: InfraArt,
  agri: AgroArt,
  ventures: VenturesArt,
  labs: LabsArt,
  manuf: CastersArt,
  "tech-ai": AixpertsArt,
  packaging: PackagingArt,
  sustainability: SustainabilityArt,
};

export function EcosystemCardArt({
  id,
  className,
  style,
}: {
  id: string;
  className?: string;
  style?: CSSProperties;
}) {
  const Scene = scenes[id];
  if (!Scene) return null;

  return (
    <svg
      viewBox="0 0 240 160"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="xMaxYMax meet"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
    >
      <Scene />
    </svg>
  );
}
