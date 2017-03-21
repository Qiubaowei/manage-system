/**
 * Created by xaj on 2017/3/9.
 */
export default{
  install(Vue){

    Vue.prototype.checkUserName = (value) => {
      if(value == ""){
        return true; // 如果没有填写,默认为true
      }
      if(/\w{6,20}/.test(value)){
        return true;
      }else{
        return false;
      }
    }
    Vue.prototype.errorLabel = null;
    Vue.prototype.hasError = false;
    Vue.directive("uname",{
      bind(){
        let errorTpl = Vue.extend({
          template:'<label>用户不合法</label>'
        });
        // 实例化并挂载
        Vue.errorLabel = (new errorTpl()).$mount().$el;
      },
      update(el,binding,vnode){
        if(/\w{6,20}/.test(el.value)){
          // 验证通过
          if (Vue.hasError){
            el.parentNode.removeChild(Vue.errorLabel);
            Vue.hasError = !Vue.hasError;
          }
        }else{
          // 验证没有通过
          if (!Vue.hasError){
            el.parentNode.appendChild(Vue.errorLabel);
            Vue.hasError = ! Vue.hasError;
          }
        }
      },
    })
  }
}
