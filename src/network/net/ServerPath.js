const DomainAlpha = 'https://api-dev.adsgo.vn';
const Domain = DomainAlpha;
export default Object.freeze({
    login_api: Domain + "/user-service/api/auth",
    get_user_info_api: Domain + "/user-service/api/taixe",
    get_list_images_request_api: Domain + '/campaign-service/api/imageReport/get-image-requests',
    send_request_sp_api: Domain + '/campaign-service/api/xe/add-car-support',
    upfile_api: Domain + '/campaign-service/api/file/upload',
    get_campaign_list_api: Domain + '/campaign-service/api/chien-dich',
    get_report_list_api: Domain + '/campaign-service/api/imageReport/get-image-reported',
    send_peport_image: Domain + '/campaign-service/api/imageReport/update-image-report-detail',
    change_pass_api: Domain + '/user-service/api/user/update-password',
    logout_api: Domain + '/user-service/api/auth',
    update_firebase_token: Domain + '/user-service/api/taixe/update-firebase-token'
});