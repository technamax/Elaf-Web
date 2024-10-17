import {
  u as B,
  c as H,
  r as O,
  t as q,
  b as A,
  v as M,
  w as V,
  j as e,
  G as s,
  T as Y
} from './index-CzwspkkF.js';
import { r as l } from './vendor-BXCbSo2_.js';
import { R as $ } from './ReuseableDataGrid-I9L9E5Xk.js';
import { B as X, a as J } from './axios-lonJZgKi.js';
import { S as K } from './StatusChip-C_oGlGq1.js';
import { T as n } from './TextField-Djr8gt34.js';
import { M as x } from './MenuItem-ZWEe2ZC6.js';
const ne = ({ iss: a, handleClose: b, refetchData: k, isRejected: o }) => {
  var v, g;
  const { user: Q } = B(),
    [r, L] = l.useState({
      poId: a.poId,
      issuanceId: a.issuanceId,
      rejectionId: a.rejectionId || null,
      processTypeId: a.processTypeId || 1223,
      dispatchedQuantity: '',
      dispatchFrom: '',
      destination: '',
      isRejectedOGP: o ? 'Y' : 'N',
      remarks: '',
      truckId: '',
      driverId: '',
      createdBy: Q.empId
    }),
    { enqueueSnackbar: m } = H(),
    [I, h] = l.useState([]),
    [N, S] = l.useState([]),
    [j, G] = l.useState([]),
    [z, R] = l.useState([]),
    [T, W] = l.useState([]),
    { data: d, refetch: y } = O(
      { poId: a.poId, issuanceId: a.issuanceId },
      { skip: !a.poId || !a.issuanceId }
    ),
    { data: u, refetch: C } = q(a.issuanceId, { skip: !a.issuanceId }),
    { data: p, refetch: Z } = A(),
    { data: f, refetch: F } = M(),
    { data: D, refetch: E } = V();
  console.log('rejectionDetailsData', u),
    l.useEffect(() => {
      if (o) {
        if ((u == null ? void 0 : u.result) === null) {
          h([]);
          return;
        }
        u && h(u.result.map((t, i) => ({ id: i + 1, ...t })));
      } else {
        if ((d == null ? void 0 : d.result) === null) {
          h([]);
          return;
        }
        d && h(d.result.map((t, i) => ({ id: i + 1, ...t })));
      }
    }, [d, y, u, C]),
    l.useEffect(() => {
      f && R(f.result.map((t, i) => ({ id: i + 1, ...t })));
    }, [f, F]),
    l.useEffect(() => {
      D && W(D.result.map((t, i) => ({ id: i + 1, ...t })));
    }, [D, E]),
    l.useEffect(() => {
      p &&
        (S(p.result[0].destination.map((t, i) => ({ id: i + 1, ...t }))),
        G(p.result[0].dispatchFrom.map((t, i) => ({ id: i + 1, ...t }))));
    }, [p, y]),
    console.log('iss', a),
    console.log('formData', r),
    console.log('issuanceDetails', I),
    console.log('dispatchFromList', j);
  const c = (t) => {
      const { name: i, value: w } = t.target;
      L({ ...r, [i]: w });
    },
    P = [
      { field: 'id', headerName: 'Sr#' },
      { field: 'fabricName', headerName: 'Fabric' },
      { field: 'designNo', headerName: 'Design' },
      { field: 'colorName', headerName: 'Color' },
      {
        field: o ? 'rejectedQty' : 'issuanceQuantity',
        headerName: o ? 'Rejected Quantity' : 'Issued Quantity',
        renderCell: (t) =>
          e.jsx(K, {
            label: t.value.toLocaleString(),
            status: o ? 'Rejected' : 'Issued'
          })
      }
    ],
    U = async () => {
      if (
        r.dispatchedQuantity > a.issuanceQuantity - a.dispatchedQuantity ||
        r.dispatchedQuantity > a.rejectedQty
      ) {
        m(
          'Error: DisPatched quantity cannot be greater than issuance quantity!',
          { variant: 'error', autoHideDuration: 5e3 }
        );
        return;
      }
      try {
        const t = await J.post(
          'http://100.42.177.77:81/api/Issuance/GenerateOGP',
          r
        );
        k(),
          t.data.success
            ? m(`${t.data.message} !`, {
                variant: 'success',
                autoHideDuration: 5e3
              })
            : (m(`${t.data.message} !`, {
                variant: 'error',
                autoHideDuration: 5e3
              }),
              console.log('response.message', t.data.message)),
          console.log('Save response:', t.data),
          b();
      } catch (t) {
        console.error('Error saving data:', t),
          m('FAILED: Unable to start Process', {
            variant: 'error',
            autoHideDuration: 5e3
          });
      }
    };
  return e.jsxs('div', {
    children: [
      e.jsxs(s, {
        container: !0,
        spacing: 1,
        width: 'Inherit',
        sx: { paddingY: 2, paddingX: 2 },
        children: [
          e.jsx(s, {
            item: !0,
            xs: 12,
            md: 3,
            children: e.jsx(n, {
              fullWidth: !0,
              disabled: !0,
              label: 'Production',
              name: 'productionId',
              value: a.collectionName,
              size: 'small'
            })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            md: 1.5,
            children: e.jsx(n, {
              fullWidth: !0,
              disabled: !0,
              label: 'Vendor',
              name: 'vendorId',
              value: a.vendorName,
              size: 'small'
            })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            md: 1.5,
            children: e.jsx(n, {
              fullWidth: !0,
              disabled: !0,
              label: 'Process Type',
              name: 'processTypeName',
              value: a.processTypeName,
              size: 'small'
            })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            md: 3,
            children: e.jsx(n, {
              size: 'small',
              type: a.issuanceDate ? null : 'Date',
              label: 'Issuance Date',
              name: 'issuanceDate',
              value: a.issuanceDate
                ? new Date(a.issuanceDate).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: '2-digit'
                  })
                : r.issuanceDate,
              fullWidth: !0,
              disabled: a.issuanceDate,
              InputLabelProps: { shrink: !0, sx: { color: 'black' } }
            })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            md: 3,
            children: e.jsx(n, {
              size: 'small',
              type: a.issuanceDate ? null : 'Date',
              label: 'ExpectedReturn Date',
              name: 'expectedReturnDate',
              value: a.expectedReturnDate
                ? new Date(a.expectedReturnDate).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: '2-digit'
                  })
                : r.expectedReturnDate,
              fullWidth: !0,
              disabled: a.expectedReturnDate,
              InputLabelProps: { shrink: !0, sx: { color: 'black' } }
            })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            md: 3,
            children: e.jsx(n, {
              fullWidth: !0,
              select: !0,
              label: 'Dispatch From',
              name: 'dispatchFrom',
              value: r.dispatchFrom,
              onChange: c,
              size: 'small',
              children: j.map((t) =>
                e.jsx(
                  x,
                  { value: t.lookUpId, children: t.lookUpName },
                  t.lookUpId
                )
              )
            })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            md: 3,
            children: e.jsx(n, {
              fullWidth: !0,
              select: !0,
              label: 'Destination',
              name: 'destination',
              value: r.destination,
              onChange: c,
              size: 'small',
              children: N.map((t) =>
                e.jsx(
                  x,
                  { value: t.lookUpId, children: t.lookUpName },
                  t.lookUpId
                )
              )
            })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            md: 3,
            children: e.jsx(n, {
              fullWidth: !0,
              select: !0,
              label: 'Drivers',
              name: 'driverId',
              value: r.driverId,
              onChange: c,
              size: 'small',
              children: z.map((t) =>
                e.jsx(
                  x,
                  { value: t.driverId, children: t.driverName },
                  t.driverId
                )
              )
            })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            md: 3,
            children: e.jsx(n, {
              fullWidth: !0,
              select: !0,
              label: 'Trucks',
              name: 'truckId',
              value: r.truckId,
              onChange: c,
              size: 'small',
              children: T.map((t) =>
                e.jsx(
                  x,
                  { value: t.truckId, children: t.truckNumber },
                  t.truckId
                )
              )
            })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            md: 3,
            children: e.jsx(n, {
              fullWidth: !0,
              label: 'Remarks',
              name: 'remarks',
              value: r.remarks,
              onChange: c,
              size: 'small'
            })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            md: 1.5,
            children: e.jsx(n, {
              fullWidth: !0,
              disabled: !0,
              label: 'Issuance Quantity',
              name: 'issuanceQuantity',
              value:
                ((v = a.issuanceQuantity) == null
                  ? void 0
                  : v.toLocaleString()) ||
                ((g = a.rejectedQty) == null ? void 0 : g.toLocaleString()),
              size: 'small'
            })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            md: 1.5,
            children: e.jsx(n, {
              fullWidth: !0,
              disabled: !0,
              label: 'Remaining Quantity',
              name: 'issuanceQuantity',
              value: a.issuanceQuantity || a.rejectedQty - a.dispatchedQuantity,
              size: 'small'
            })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            md: 1.5,
            children: e.jsx(n, {
              fullWidth: !0,
              type: 'Number',
              label: 'DispatchedQuantity',
              name: 'dispatchedQuantity',
              value: r.dispatchedQuantity,
              onChange: c,
              size: 'small'
            })
          })
        ]
      }),
      e.jsxs(s, {
        container: !0,
        spacing: 2,
        width: 'Inherit',
        children: [
          e.jsx(s, {
            item: !0,
            xs: 12,
            children: e.jsx(Y, { variant: 'h2', children: 'Details' })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            children: e.jsx($, { initialRows: I, iColumns: P, hideAction: !0 })
          }),
          e.jsx(s, {
            item: !0,
            xs: 12,
            textAlign: 'right',
            sx: { mt: 2 },
            children: e.jsx(X, {
              variant: 'contained',
              size: 'small',
              onClick: U,
              children: 'Generate OGP'
            })
          })
        ]
      })
    ]
  });
};
export { ne as D };
