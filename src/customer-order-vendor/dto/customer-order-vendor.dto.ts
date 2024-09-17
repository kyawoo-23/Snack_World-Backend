type GetCustomerVendorOrdersDTO = {
  status: string;
  startDate?: Date;
  endDate?: Date;
};

type SalesReportDto = {
  vendorId: string;
  startDate: Date;
  endDate: Date;
};
