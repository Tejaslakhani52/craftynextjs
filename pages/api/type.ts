interface Category {
  auto_create: boolean;
  category_id: number;
  category_name: string;
  category_size: string;
  height: number;
  id_name: string;
  is_premium: boolean;
  latest: boolean;
  pages: number;
  template_id: number;
  template_name: string;
  template_thumb: string;
  thumbArray?: string[];
  width: number;
}

export interface getTemplateDataType {
  datas: Category[];
  map: Function;
  filter: Function;
}

export interface template_modal {
  auto_create: boolean;
  category_id: number;
  category_name: string;
  category_size: string;
  height: number;
  id_name: string;
  is_premium: boolean;
  latest: boolean;
  pages: number;
  template_id: number;
  template_name: string;
  template_thumb: string;
  thumbArray: string[];
  width: number;
}

export interface getAllTemplatesDataType {
  category_id: number;
  category_name: string;
  category_thumb: string;
  id_name: string;
  map: Function;
  filter: Function;
}
