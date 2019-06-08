import api from '@/services/Api';

export default{
    getGist(){
        return api().get('pestGist');
    },
}