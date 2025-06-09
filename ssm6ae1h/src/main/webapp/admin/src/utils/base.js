const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm6ae1h/",
            name: "ssm6ae1h",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm6ae1h/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "生产管理系统"
        } 
    }
}
export default base
