$(document).ready(function () {
	// 화면 중앙 로그인 영역 처리
	__ajaxCall("/interface/checkLogin.do", {}, true, "json", "post"
		,function (_response) {
			if (_response.result_code == "SUCCESS") {
				$(".new-rewards_wrap").hide();
				$(".line_msr").show();
			} else {
				$(".new-rewards_wrap").show();
				$(".line_msr").hide();
			}
		}
		,function (_error) {
		}
	);
});