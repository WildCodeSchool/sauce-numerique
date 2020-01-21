import React from 'react';
import {
  fetchUtils, Admin, Resource, Login,
} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from '../components/admin/authProvider';
import API_URL from '../api.config';
import {
  PartnersList, PartnersEdit, PartnersCreate, PostIcon,
} from '../components/admin/partners';
import { RessourcesList, RessourcesEdit, RessourcesCreate } from '../components/admin/ressources';
import Image from '../src/img/image.jpg';


const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = jsonServerProvider(`${API_URL}/api/v1`, httpClient);


const AdminPage = () => {
//   const LoginAdmin = () => <Login backgroundImage={Image} />loginPage={LoginAdmin};

  return (
    <div className="AdminPage">
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="partners" list={PartnersList} edit={PartnersEdit} create={PartnersCreate} icon={PostIcon} />
        <Resource name="ressources" list={RessourcesList} edit={RessourcesEdit} create={RessourcesCreate} icon={PostIcon} />
      </Admin>
    </div>
  );
};
// http://localhost:5000
// https://sauce-num-back.herokuapp.com

export default AdminPage;
