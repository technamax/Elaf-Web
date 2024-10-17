import { s as z, u as C, c as D, j as a, G as h } from './index-CzwspkkF.js';
import { r as s } from './vendor-BXCbSo2_.js';
import { B as j, a as T } from './axios-lonJZgKi.js';
import { T as q } from './TextField-Djr8gt34.js';
import { u as E, D as Q } from './ReuseableDataGrid-I9L9E5Xk.js';
const l = z(q)(({ theme: n }) => ({
    '& .MuiInputBase-input': { fontSize: '0.875rem', padding: '4px 6px' },
    width: 'auto',
    height: 'auto',
    minWidth: '100px',
    minHeight: '30px'
  })),
  H = ({
    fabrics: n,
    setFabrics: v,
    initialFormData: m,
    stockId: S,
    handleClose: N,
    refetchStockData: I
  }) => {
    const { user: c } = C(),
      { enqueueSnackbar: d } = D();
    s.useState([]);
    const [p, b] = s.useState({
      stockId: S,
      itpId: m.itpId,
      productionId: m.productionId
    });
    console.log('receiveFormData', p), s.useState({});
    const y = E(),
      f = n.filter((e) => e.itpQuantity > 0);
    console.log('fabrics', n),
      console.log('fFabrics', f),
      console.log('initialFormData', m);
    const u = (e) => {
      const { id: t, field: i, value: g } = e;
      console.log('Editing cell:', e),
        v((x) =>
          x.map((o) => {
            if (o.id === t) {
              const r = {
                ...o,
                [i]: g,
                quantity: o.itpQuantity,
                productName: o.fabricName,
                appId: c.appId,
                createdOn: new Date().toISOString(),
                createdBy: c.empId,
                lastUpdatedOn: new Date().toISOString(),
                lastUpdatedBy: c.empId
              };
              return (
                (i === 'rate' || i === 'quantity') &&
                  (r.amount = r.rate * r.quantity),
                (i === 'tax' || i === 'rate' || i === 'quantity') &&
                  (r.amountAfterTax = r.amount + r.amount * (r.tax / 100)),
                r
              );
            }
            return o;
          })
        );
    };
    s.useEffect(() => {
      b({ ...p, stockReceivingDetails: n.filter((e) => e.itpQuantity > 0) });
    }, [n, v]),
      console.log('fabrics', n);
    const w = [
        { field: 'id', headerName: 'Sr#' },
        { field: 'fabricName', headerName: 'Fabric' },
        { field: 'barcode', headerName: 'Barcode' },
        { field: 'uomName', headerName: 'UOM' },
        {
          field: 'assignQty',
          headerName: 'Assigned Qty',
          valueGetter: (e) => e.toLocaleString()
        },
        {
          field: 'itpQuantity',
          headerName: 'itp Qty Received',
          valueGetter: (e) => e.toLocaleString()
        },
        {
          field: 'quantity',
          headerName: 'add qty',
          renderCell: (e) =>
            a.jsx(l, {
              variant: 'outlined',
              disabled: !0,
              size: 'small',
              sx: { mt: 1, width: '100%' },
              value: e.row.itpQuantity || '',
              onChange: (t) =>
                u({
                  id: e.id,
                  field: 'quantity',
                  value: Number(t.target.value)
                }),
              type: 'number',
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        },
        {
          field: 'rate',
          headerName: 'Rate',
          renderCell: (e) =>
            a.jsx(l, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '100%' },
              value: e.row.rate || '',
              onChange: (t) =>
                u({ id: e.id, field: 'rate', value: Number(t.target.value) }),
              type: 'number',
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        },
        {
          field: 'tax',
          headerName: 'Tax',
          renderCell: (e) =>
            a.jsx(l, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '100%' },
              value: e.row.tax || '',
              onChange: (t) =>
                u({ id: e.id, field: 'tax', value: Number(t.target.value) }),
              type: 'number',
              InputProps: { style: { fontSize: '0.875rem' } }
            })
        },
        {
          field: 'amount',
          headerName: 'Amount',
          renderCell: (e) => {
            const i = (e.row.rate * e.row.quantity || 0).toLocaleString();
            return a.jsx(l, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '100%' },
              value: i,
              type: 'text',
              InputProps: { style: { fontSize: '0.875rem' } }
            });
          }
        },
        {
          field: 'amountAfterTax',
          headerName: 'Amount After Tax',
          renderCell: (e) => {
            const i = (e.row.amountAfterTax || 0).toLocaleString();
            return a.jsx(l, {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 1, width: '100%' },
              value: i,
              onChange: (g) => {
                const x = Number(g.target.value.replace(/,/g, ''));
                u({ id: e.id, field: 'amountAfterTax', value: x });
              },
              type: 'text',
              InputProps: { style: { fontSize: '0.875rem' } }
            });
          }
        }
      ],
      A = () => {
        y.current.autosizeColumns({ includeHeaders: !0, includeOutliers: !0 });
      };
    s.useEffect(() => {
      A();
    });
    const R = async () => {
      if (f.some((t) => t.rate === void 0 || t.rate === 0)) {
        d('Please enter rate for all fabrics before saving!', {
          variant: 'warning',
          autoHideDuration: 5e3
        });
        return;
      }
      try {
        const t = await T.post(
          'http://100.42.177.77:81/api/StockReceiving/SaveStockReceivingDetails',
          p
        );
        console.log('Save response:', t.data),
          t.data.success
            ? d(`${t.data.message} !`, {
                variant: 'success',
                autoHideDuration: 5e3
              })
            : (d(`${t.data.message} !`, {
                variant: 'error',
                autoHideDuration: 5e3
              }),
              console.log('response.message', t.data.message)),
          I(),
          N();
      } catch (t) {
        console.error('Error saving data:', t),
          d('FAILED: Unable to save', {
            variant: 'error',
            autoHideDuration: 5e3
          });
      }
    };
    return a.jsxs(h, {
      container: !0,
      spacing: 1,
      width: 'Inherit',
      sx: { paddingY: 2, paddingX: 2 },
      children: [
        a.jsx(h, {
          item: !0,
          xs: 12,
          children: a.jsx('div', {
            style: { height: 400, width: '100%' },
            children: a.jsx(Q, {
              rows: f,
              columns: w,
              pageSize: 10,
              apiRef: y,
              disableRowSelectionOnClick: !0
            })
          })
        }),
        a.jsx(h, {
          item: !0,
          xs: 12,
          textAlign: 'right',
          sx: { mt: 2 },
          children: a.jsx(j, {
            variant: 'contained',
            size: 'small',
            onClick: R,
            children: 'Receive'
          })
        }),
        ' '
      ]
    });
  };
export { H as R };
