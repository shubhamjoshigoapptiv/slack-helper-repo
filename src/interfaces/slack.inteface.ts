export interface SlackServiceModuleOptions {
  customer: {
    customerId: string;
    customerType: string;
    customerName?: string;
    source: string;
  };

  channel: {
    channelId: string;
    channelType: string;
    channelName: string;
  };

  issues: {
    issueId: string;
    issueType: string;
    issueMessage: string;
    issueStatus: string;
  };
}
