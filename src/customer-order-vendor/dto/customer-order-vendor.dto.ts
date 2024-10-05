type GetCustomerVendorOrdersDTO = {
  status: string;
  startDate?: Date;
  endDate?: Date;
};

type SalesReportDto = {
  vendorId?: string;
  startDate: Date;
  endDate: Date;
};

type VendorSalesReport = {
  vendorId: string;
  vendorName: string;
  totalSales: number;
  totalProductsSold: number;
  totalOrders: number;
  cancelledOrders: number;
};
