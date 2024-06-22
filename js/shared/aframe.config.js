const { AFRAME } = require("../aframe.min");

AFRAME.registerComponent("navigate", {
  schema: {
    url: { default: "" },
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    el.addEventListener("click", function () {
      window.location.href = data.url;
    });
  },
});

AFRAME.registerComponent("device-orientation-permission-ui", {
  schema: {
    enabled: { default: true },
    deviceMotionMessage: {
      default:
        "ARを体験するためには、デバイスモーションセンサーの使用が必要となります。使用を許可してください。",
    },
    mobileDesktopMessage: {
      default:
        "モバイル版サイトを読むこむようブラウザを設定し、リロードして没入型モードをお楽しみください。",
    },
    httpsMessage: {
      default: "HTTPS経由でサイトにアクセスしてください。",
    },
    denyButtonText: { default: "拒否" },
    allowButtonText: { default: "許可" },
    cancelButtonText: { default: "キャンセル" },
  },
});
