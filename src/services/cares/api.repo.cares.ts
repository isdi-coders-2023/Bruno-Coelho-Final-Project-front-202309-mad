import { serverUrl } from '../../config';
import { Care } from '../../entities/care';

export class CaresRepo {
  apiUrl = serverUrl + '/cares';
  constructor(public token: string) {}
  async getCares(): Promise<Care[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async getHairCares(): Promise<Care[]> {
    const response = await fetch(this.apiUrl + `/search/type/hair`);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async getEyebrowsCares(): Promise<Care[]> {
    const response = await fetch(this.apiUrl + `/search/type/eyebrows`);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async getEyelashesCares(): Promise<Care[]> {
    const response = await fetch(this.apiUrl + `/search/type/eyelashes`);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async getNailsCares(): Promise<Care[]> {
    const response = await fetch(this.apiUrl + `/search/type/nails`);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async createCare(newCare: FormData): Promise<Care> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      body: newCare,
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async deleteCare(id: Care['id']): Promise<void> {
    const finalUrl = `${this.apiUrl}/delete/${id}`;
    const response = await fetch(finalUrl, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
  }

  async editCare(
    updatedCare: {
      name: string;
      price: string;
    },
    id: Care['id']
  ): Promise<void> {
    const finalUrl = `${this.apiUrl}/update/${id}`;
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(updatedCare),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
