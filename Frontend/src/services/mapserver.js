import api from '@/services/mapapi';

export default{
    getdzo() {
      return api().get('dzo');
    },
  };
  