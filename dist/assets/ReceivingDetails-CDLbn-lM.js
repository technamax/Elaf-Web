import {
  s as k,
  u as E,
  c as A,
  p as T,
  q as O,
  j as t,
  G as r,
  T as W
} from './index-CzwspkkF.js';
import { r as o, R as D } from './vendor-BXCbSo2_.js';
import { u as H, D as M } from './ReuseableDataGrid-I9L9E5Xk.js';
import { B as q, a as F } from './axios-lonJZgKi.js';
import { T as n } from './TextField-Djr8gt34.js';
import { M as U } from './MenuItem-ZWEe2ZC6.js';
const h = k(n)(({ theme: i }) => ({
    '& .MuiInputBase-input': { fontSize: '0.875rem', padding: '4px 6px' },
    width: 'auto',
    height: 'auto',
    minWidth: '100px',
    minHeight: '30px'
  })),
  _ = ({ iss: i, handleClose: b, refetchIssuanceData: j }) => {
    const { user: y } = E(),
      [u, x] = o.useState({
        receivingId: 0,
        locationId: '',
        createdBy: y.empId,
        ...i
      }),
      Q = H(),
      { enqueueSnackbar: v } = A(),
      [s, g] = o.useState([]),
      { data: f, refetch: V } = T(),
      { data: l, refetch: I } = O(i.issuanceId, { skip: !i.issuanceId }),
      [S, C] = o.useState([]);
    o.useEffect(() => {
      f && C(f.result.map((e, a) => ({ id: a + 1, ...e })));
    }, [f]),
      o.useEffect(() => {
        if ((l == null ? void 0 : l.result) === null) {
          g([]);
          return;
        }
        l &&
          g(
            l.result
              .filter((e) => e.lastReceivedQty < e.dispatchedQuantity)
              .map((e, a) => ({ id: a + 1, receivedQty: 0, ...e }))
          );
      }, [l, I]),
      console.log('iss', i),
      console.log('issuanceDetailsData', l);
    const N = (e) => {
        const { name: a, value: d } = e.target;
        x({ ...u, [a]: d });
      },
      c = (e) => {
        const { id: a, field: d, value: B } = e;
        console.log('Editing cell:', e),
          g((G) =>
            G.map((p) => {
              if (p.id === a) {
                const m = {
                  ...p,
                  [d]: B,
                  receivingId: 0,
                  receivingDetId: 0,
                  appId: y.appId,
                  createdOn: new Date().toISOString(),
                  createdBy: y.empId,
                  lastUpdatedOn: new Date().toISOString(),
                  lastUpdatedBy: y.empId
                };
                return (
                  (d === 'gradeAQty' ||
                    d === 'gradeBQty' ||
                    d === 'gradeCPQty' ||
                    d === 'others1Qty') &&
                    (m.receivedQty =
                      (m.gradeAQty || 0) +
                      (m.gradeBQty || 0) +
                      (m.gradeCPQty || 0) +
                      (m.others1Qty || 0)),
                  m
                );
              }
              return p;
            })
          );
      };
    D.useEffect(() => {
      x({ ...u, receivingTransactionsDetailsModelList: s });
    }, [s, g]),
      console.log('formData', u),
      console.log('issuanceDetails', s);
    const w = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'colorName', headerName: 'Color' },
        { field: 'designNo', headerName: 'Design' },
        { field: 'fabricName', headerName: 'Fabric' },
        {
          field: 'issuanceQuantity',
          headerName: 'Quantity',
          valueGetter: (e) => e.toLocaleString()
        },
        { field: 'uomName', headerName: 'UOM' },
        {
          field: 'lastReceivedQty',
          headerName: 'Overall Received',
          valueGetter: (e, a) => (e - a.shortageQty).toLocaleString()
        },
        {
          field: 'remaining',
          headerName: 'Remaining',
          valueGetter: (e, a) =>
            (
              a.issuanceQuantity -
              (a.lastReceivedQty - a.shortageQty)
            ).toLocaleString()
        },
        {
          field: 'receivedQty',
          headerName: 'Received qty',
          renderCell: (e) =>
            t.jsx(h, {
              variant: 'outlined',
              disabled: !0,
              size: 'small',
              sx: { mt: 1, width: '50px' },
              value:
                (e.row.gradeAQty || 0) +
                (e.row.gradeBQty || 0) +
                (e.row.gradeCPQty || 0) +
                (e.row.others1Qty || 0),
              onChange: (a) =>
                c({
                  id: e.id,
                  field: 'receivedQty',
                  value: Number(a.target.value)
                }),
              type: 'number',
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        },
        {
          field: 'gradeAQty',
          headerName: 'Grade A',
          renderCell: (e) =>
            t.jsx(h, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '50px' },
              value: e.row.gradeAQty || 0,
              defaultValue: 10,
              onChange: (a) =>
                c({
                  id: e.id,
                  field: 'gradeAQty',
                  value: Number(a.target.value)
                }),
              type: 'number',
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        },
        {
          field: 'gradeBQty',
          headerName: 'Grade B',
          renderCell: (e) =>
            t.jsx(h, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '50px' },
              value: e.row.gradeBQty || 0,
              onChange: (a) =>
                c({
                  id: e.id,
                  field: 'gradeBQty',
                  value: Number(a.target.value)
                }),
              type: 'number',
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        },
        {
          field: 'gradeCPQty',
          headerName: 'Cut Pc',
          renderCell: (e) =>
            t.jsx(h, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '50px' },
              value: e.row.gradeCPQty || 0,
              onChange: (a) =>
                c({
                  id: e.id,
                  field: 'gradeCPQty',
                  value: Number(a.target.value)
                }),
              type: 'number',
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        },
        {
          field: 'others1Qty',
          headerName: 'Others',
          renderCell: (e) =>
            t.jsx(h, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '50px' },
              value: e.row.others1Qty || 0,
              onChange: (a) =>
                c({
                  id: e.id,
                  field: 'others1Qty',
                  value: Number(a.target.value)
                }),
              type: 'number',
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        },
        {
          field: 'remarks',
          headerName: 'Remarks',
          renderCell: (e) =>
            t.jsx(h, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '100%' },
              value: e.row.remarks || '',
              onKeyDown: (a) => {
                a.stopPropagation();
              },
              onChange: (a) =>
                c({ id: e.id, field: 'remarks', value: a.target.value }),
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        }
      ],
      R = () => {
        Q.current.autosizeColumns({ includeHeaders: !0, includeOutliers: !0 });
      };
    D.useEffect(() => {
      R();
    });
    const [z, P] = o.useState(!1);
    o.useEffect(() => {
      P(s.every((e) => e.issuanceQuantity === e.lastReceivedQty));
    }, [s, g]),
      console.log('newpayload', {
        ...u,
        receivingTransactionsDetailsModelList: s.filter(
          (e) => e.receivedQty !== 0
        )
      });
    const L = async () => {
      for (let e of s)
        if (
          e.receivedQty > e.issuanceQuantity ||
          e.issuanceQuantity === e.lastReceivedQty
        ) {
          v(
            'Error: Received quantity cannot be greater than issuance quantity!',
            { variant: 'error', autoHideDuration: 5e3 }
          );
          return;
        }
      try {
        const e = await F.post(
          'http://100.42.177.77:81/api/Receiving/SaveReceiving',
          {
            ...u,
            receivingTransactionsDetailsModelList: s.filter(
              (a) => a.receivedQty !== 0
            )
          }
        );
        j(),
          e.data.success
            ? v(`${e.data.message} !`, {
                variant: 'success',
                autoHideDuration: 5e3
              })
            : (v(`${e.data.message} !`, {
                variant: 'error',
                autoHideDuration: 5e3
              }),
              console.log('response.message', e.data.message)),
          console.log('Save response:', e.data),
          b(),
          I();
      } catch (e) {
        console.error('Error saving data:', e),
          v('FAILED: Unable to start Process', {
            variant: 'error',
            autoHideDuration: 5e3
          });
      }
    };
    return t.jsxs('div', {
      children: [
        t.jsxs(r, {
          container: !0,
          spacing: 1,
          width: 'Inherit',
          sx: { paddingY: 2, paddingX: 2 },
          children: [
            t.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: t.jsx(n, {
                fullWidth: !0,
                disabled: !0,
                label: 'Production',
                name: 'productionId',
                value: i.collectionName,
                size: 'small'
              })
            }),
            t.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: t.jsx(n, {
                fullWidth: !0,
                disabled: !0,
                label: 'Process Type',
                name: 'productionId',
                value: i.processTypeName,
                size: 'small'
              })
            }),
            t.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: t.jsx(n, {
                size: 'small',
                label: 'Issuance Date',
                name: 'issuanceDate',
                value: new Date(i.issuanceDate).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: '2-digit'
                }),
                fullWidth: !0,
                disabled: !0,
                InputLabelProps: { shrink: !0, sx: { color: 'black' } }
              })
            }),
            t.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: t.jsx(n, {
                size: 'small',
                label: 'ExpectedReturn Date',
                name: 'expectedReturnDate',
                value: new Date(i.expectedReturnDate).toLocaleDateString(
                  'en-GB',
                  { day: 'numeric', month: 'short', year: '2-digit' }
                ),
                fullWidth: !0,
                disabled: !0,
                InputLabelProps: { shrink: !0, sx: { color: 'black' } }
              })
            }),
            t.jsxs(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: [
                t.jsx(n, {
                  fullWidth: !0,
                  disabled: !0,
                  label: 'Vendor',
                  name: 'vendorId',
                  value: i.vendorName,
                  size: 'small'
                }),
                ' '
              ]
            }),
            t.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: t.jsx(n, {
                fullWidth: !0,
                disabled: !0,
                label: 'Dispatched',
                name: 'dispatchedQuantity',
                value: i.dispatchedQuantity.toLocaleString(),
                size: 'small'
              })
            }),
            t.jsx(r, {
              item: !0,
              xs: 12,
              md: 3,
              children: t.jsx(n, {
                fullWidth: !0,
                select: !0,
                label: 'Select Location',
                name: 'locationId',
                value: u.locationId,
                onChange: N,
                size: 'small',
                children: S.map((e) =>
                  t.jsx(
                    U,
                    {
                      value: e.locationId,
                      children:
                        e.section + '.' + e.aisle + '.' + e.rack + '.' + e.bin
                    },
                    e.locationId
                  )
                )
              })
            })
          ]
        }),
        t.jsxs(r, {
          container: !0,
          spacing: 2,
          width: 'Inherit',
          children: [
            t.jsx(r, {
              item: !0,
              xs: 12,
              children: t.jsx(W, { variant: 'h2', children: 'Details' })
            }),
            t.jsx(r, {
              item: !0,
              xs: 12,
              children: t.jsx('div', {
                style: { height: 400, width: '100%' },
                children: t.jsx(M, {
                  rows: s,
                  columns: w,
                  apiRef: Q,
                  disableRowSelectionOnClick: !0
                })
              })
            }),
            t.jsx(r, {
              item: !0,
              xs: 12,
              textAlign: 'right',
              sx: { mt: 2 },
              children: t.jsx(q, {
                variant: 'contained',
                size: 'small',
                onClick: L,
                disabled: z,
                children: 'Generate IGP'
              })
            })
          ]
        })
      ]
    });
  };
export { _ as R };
