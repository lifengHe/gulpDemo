(function() {
	var dataArr = [
		{
			"vipGiftContent": "虾米15天VIP专用卡",
			"gmtCreate": "1489993235000",
			"isGet": "1"
		},
		{
			"vipGiftContent": "虾米一个月VIP专用卡",
			"gmtCreate": "1490014835000",
			"isGet": "1"
		},
		{
			"vipGiftContent": "虾米二个月VIP专用卡",
			"gmtCreate": "1490187635000",
			"isGet": "0"
		}
	];
	var htmls = '';
  if (dataArr.length) {
    for (var i = 0; i < dataArr.length; i++) {
      var item = dataArr[i];
      if (item.gmtCreate && item.gmtCreate > 0) {
        htmls += '<li><p class="gift-content">' + item.vipGiftContent + '</p>' +
                 '<p class="gmt-create">领取时间:' + formatTime(item.gmtCreate) + '</p>';
      } else {
        htmls += '<li class="single"><p class="gift-content">' + item.vipGiftContent + '</p>';
      }
      if (item.isGet === '0') {
        htmls += '<span class="activation no"></span>';
      } else if (item.isGet === '1') {
        htmls += '<span class="activation yes"></span>';
      }
      htmls += '</li>';
    }
    document.querySelector('.my-card-list').innerHTML = htmls;
  }
	function formatTime(time) {
    var date = new Date(+time);
    return date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
  }
})();
