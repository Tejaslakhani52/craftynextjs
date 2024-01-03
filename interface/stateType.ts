export interface ActionStateType {
  openSidebar: boolean;
  openMobileMenubar: boolean;
  openTempModal: boolean;
  enterAccount: boolean;
  mainLoader: boolean;
  mainLoad: boolean;
  modalClosePath: any;
  tempId: string;
  actions: any;
}

export interface AuthStateType {
  templatesData: any[];
  templatesSingleValue: any;
  tokenValue: boolean;
  userData: any;
  auth: any;
}

export interface TemplateStateType {
  categoryTempData: any;
  categoryDataPage: number;
  setPurchaseItems: any;
}
