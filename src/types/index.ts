export interface Project {
  id: string;
  Title: string;
  Description: string;
  status?: string;
  tags?: string[];
  Image_URL?: string;
  Project_URL?: string;
  GitHub_URL?: string;
  created_at?: string;
  updated_at?: string;
}
