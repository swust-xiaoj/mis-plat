// import request from '../../../utils/request';
import instance from '../../../utils/axios';

export function fetch({ id }) {
  return instance.get(`/api/sites/page?id=${id}`);
}
