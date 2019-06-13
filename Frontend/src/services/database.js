import api from '@/services/Api';

export default{
  getGist() {
    return api().get('pestGist');
  },
  getdata(id) {
    return api().get(`/${id}`);
  },
};
