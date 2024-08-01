import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchInvoices } from '../../api/invoices';

export const getInvoices = createAsyncThunk('invoices/getInvoices', async () => {
  const data = await fetchInvoices();
  return data;
});

interface InvoiceState {
  invoices: any[];
  selectedInvoice: any | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: InvoiceState = {
  invoices: [],
  selectedInvoice: null,
  status: 'idle',
  error: null,
};

const invoiceSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    setSelectedInvoice: (state, action: PayloadAction<any>) => {
      state.selectedInvoice = action.payload;
    },
    clearSelectedInvoice: (state) => {
      state.selectedInvoice = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInvoices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getInvoices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.invoices = action.payload;
      })
      .addCase(getInvoices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSelectedInvoice, clearSelectedInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
