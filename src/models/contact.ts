export interface Contact {
  id: string;
  name: string;
  description: string;
  avatar: string;
  firstName?: string;
  lastName?: string;
  otherNames?: string;
  relation?: string;
  phone?: string;
  email?: string;
  website?: string;
  notes?: string;
  address?: string;
  city?: string;
  country?: string;
  postalCode?: string;
}
