import { j as s, C as D, d as N, G as P } from './index-CzwspkkF.js';
import { r as c } from './vendor-BXCbSo2_.js';
import { T as E } from './TextField-Djr8gt34.js';
import { M as v } from './MenuItem-ZWEe2ZC6.js';
const B = ({
  rId: n,
  DyeingIssuance: p,
  ogpView: o,
  receiving: m,
  inspection: u,
  igpReport: f,
  paramIssuanceId: z,
  POSummary: R,
  OGPNumber: b,
  PO: h,
  GRN: i,
  ogpNumber: G,
  paramRejectionId: d,
  issuanceOgp: H
}) => {
  const [S, L] = c.useState([]),
    [l, U] = c.useState(''),
    [M, C] = c.useState(''),
    [T, $] = c.useState(''),
    j = c.useRef(null);
  c.useEffect(() => {
    (async () => {
      try {
        const e = await (
          await fetch(
            'http://100.42.177.77:81/api/Reports/GetReportsByAppId?appId=1'
          )
        ).json();
        if ((L(e.result), n)) {
          const a = e.result.find((I) => I.reportId === n);
          a && (C(n), U(a.reportUrl), $(a.reportDesc));
        }
      } catch (t) {
        console.error('Error fetching reports:', t);
      }
    })();
  }, [n]);
  const k = (r) => {
    const t = r.target.value,
      e = S.find((a) => a.reportId === t);
    C(t), U(e ? e.reportUrl : ''), $(e ? e.reportDesc : '');
  };
  return (
    c.useEffect(() => {
      const r = j.current;
      if (d > 0) {
        const t = j.current;
        if (t && l) {
          const e = `${l}&paramRejectionId=${d || ''}`;
          t.src = e;
        }
        return;
      }
      if (r && l) {
        const t = {
            ParamIssuanceId:
              (o == null ? void 0 : o.paramIssuanceId) ||
              (p == null ? void 0 : p.paramIssuanceId) ||
              (m == null ? void 0 : m.paramIssuanceId),
            ParamOGP: o == null ? void 0 : o.ogpNumber,
            ParamIGPNumber: b || (f == null ? void 0 : f.ParamIGPNumber),
            ParamInspectionId: u == null ? void 0 : u.ParamInspectionId,
            paramRejectionId: d > 0 ? d : void 0,
            ParamPoIdName: h == null ? void 0 : h.ParamPoIdName,
            ParamGRNInspectionId: i == null ? void 0 : i.ParamInspectionId,
            DsPoList: R == null ? void 0 : R.dsPoList
          },
          e = Object.entries(t)
            .filter(([I, x]) => x !== void 0 && x !== '')
            .map(([I, x]) => `${I}=${encodeURIComponent(x)}`)
            .join('&'),
          a = `${l}${e ? '&' + e : ''}`;
        console.log('Generated iframe URL:', a), (r.src = a);
      }
    }, [l, o, b, p, m, u, f, d, h, i]),
    s.jsxs(D, {
      variant: 'outlined',
      children: [
        s.jsx(N, {
          className: 'css-4rfrnx-MuiCardHeader-root',
          title: 'View Reports ',
          titleTypographyProps: { style: { color: 'white' } }
        }),
        ' ',
        s.jsxs(P, {
          container: !0,
          spacing: 2,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: [
            s.jsx(P, {
              item: !0,
              xs: 12,
              md: 6,
              children: s.jsx(E, {
                fullWidth: !0,
                select: !0,
                label: 'Select Report',
                name: 'selectedReport',
                value: n || M,
                onChange: k,
                size: 'small',
                InputLabelProps: { sx: { color: 'black' } },
                children: S.map((r) =>
                  s.jsx(
                    v,
                    { value: r.reportId, children: r.reportName },
                    r.reportId
                  )
                )
              })
            }),
            s.jsx(P, {
              item: !0,
              xs: 12,
              md: 6,
              children: s.jsx(E, {
                fullWidth: !0,
                label: 'Report Description',
                name: 'selectedReportDesc',
                value: T,
                InputProps: { readOnly: !0 },
                size: 'small',
                InputLabelProps: { sx: { color: 'black' } }
              })
            })
          ]
        }),
        l &&
          s.jsx('iframe', {
            ref: j,
            src: l,
            style: {
              height: '80vh',
              width: '100%',
              border: 'none',
              marginTop: '20px'
            },
            title: 'SSRS Report'
          })
      ]
    })
  );
};
export { B as default };
