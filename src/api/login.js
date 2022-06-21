
import { post, get } from "../utils/request";

const register = ({ data }) => post({
  url: '/user/register',
  data
});

const test = () => get({
  url: '/'
})

export default {
  register,
  test
}