particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 346,//こ�?数値を変更すると星�?数が増減できる
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#ffffff"
		},
		"shape": {
			"type": "circle",//形状はcircleを指�?
			"stroke": {
				"width": 0
			},
		},
		"opacity": {
			"value": 1,//シェイプ�?透�?度
			"random": true,//シェイプ�?透�?度をランダ�?にする
			"anim": {
				"enable": true,//シェイプ�?透�?度をアニメーションさせ�?
				"speed": 3,//シェイプ�?透�?度をアニメーションさせ�?
				"opacity_min": 0,//透�?度の最小値??
				"sync": false//全てを同時にアニメーションさせな�?
			}
		},
		"size": {
			"value": 2,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 4,
				"size_min": 0.3,
				"sync": false
			}
		},
		"line_linked": {
			"enable": false,
		},
		"move": {
			"enable": true,
			"speed": 120,//こ�?数値を小さくすると�?��くりな動きにな�?
			"direction": "none",//方向指定な�?
			"random": true,//動きはランダ�?に
			"straight": true,//動きをとどめる
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 600
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": false,
			},
			"onclick": {
				"enable": false,
			},
			"resize": true
		}
	},
	"retina_detect": true
});