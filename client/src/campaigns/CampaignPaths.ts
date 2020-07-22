export const index = (): string => '/campaigns';
export const newCampaign = (): string => '/campaigns/new';
export const show = (id: string): string => `/campaigns/${id}`;
export const editCampaign = (id: string): string => `/campaigns/${id}/edit`;
