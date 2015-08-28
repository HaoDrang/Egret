//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var egret;
(function (egret) {
    /**
     * @class egret.Texture
     * @classdesc 纹理类是对不同平台不同的图片资源的封装
     * 在HTML5中，资源是一个HTMLElement对象
     * 在OpenGL / WebGL中，资源是一个提交GPU后获取的纹理id
     * Texture类封装了这些底层实现的细节，开发者只需要关心接口即可
     * @see http://edn.egret.com/cn/index.php?g=&m=article&a=index&id=135&terms1_id=25&terms2_id=31 纹理集的使用
     * @see http://edn.egret.com/cn/index.php?g=&m=article&a=index&id=123&terms1_id=25&terms2_id=30 获取资源的几种方式
     * @includeExample egret/display/Texture.ts
     */
    var Texture = (function (_super) {
        __extends(Texture, _super);
        /**
         * 创建一个 egret.Texture 对象
         */
        function Texture() {
            _super.call(this);
            /**
             * 表示这个纹理在 bitmapData 上的 x 起始位置
             */
            this._bitmapX = 0;
            /**
             * 表示这个纹理在 bitmapData 上的 y 起始位置
             */
            this._bitmapY = 0;
            /**
             * 表示这个纹理在 bitmapData 上的宽度
             */
            this._bitmapWidth = 0;
            /**
             * 表示这个纹理在 bitmapData 上的高度
             */
            this._bitmapHeight = 0;
            /**
             * 表示这个纹理显示了之后在 x 方向的渲染偏移量
             */
            this._offsetX = 0;
            /**
             * 表示这个纹理显示了之后在 y 方向的渲染偏移量
             */
            this._offsetY = 0;
            /**
             * 纹理宽度
             */
            this._textureWidth = 0;
            /**
             * 纹理高度
             */
            this._textureHeight = 0;
            /**
             * 表示bitmapData.width
             */
            this._sourceWidth = 0;
            /**
             * 表示bitmapData.height
             */
            this._sourceHeight = 0;
            this._bitmapData = null;
        }
        var __egretProto__ = Texture.prototype;
        Object.defineProperty(__egretProto__, "textureWidth", {
            /**
             * 纹理宽度
             * @member {number} egret.Texture#textureWidth
             */
            get: function () {
                return this._textureWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "textureHeight", {
            /**
             * 纹理高度
             * @member {number} egret.Texture#textureHeight
             */
            get: function () {
                return this._textureHeight;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__._setBitmapData = function (value) {
            var scale = egret.MainContext.instance.rendererContext._texture_scale_factor;
            this._bitmapData = value;
            this._sourceWidth = value.width;
            this._sourceHeight = value.height;
            this._textureWidth = this._sourceWidth * scale;
            this._textureHeight = this._sourceHeight * scale;
            this._bitmapWidth = this._textureWidth;
            this._bitmapHeight = this._textureHeight;
            this._offsetX = this._offsetY = this._bitmapX = this._bitmapY = 0;
        };
        /**
         * 获取某一点像素的颜色值
         * @method egret.Texture#getPixel32
         * @param x {number} 像素点的X轴坐标
         * @param y {number} 像素点的Y轴坐标
         * @returns {number} 指定像素点的颜色值
         * @platform Web
         */
        __egretProto__.getPixel32 = function (x, y) {
            var result = this._bitmapData.getContext("2d").getImageData(x, y, 1, 1);
            return result.data;
        };
        /**
         * 销毁纹理对象
         * @method egret.Texture#dispose
         */
        __egretProto__.dispose = function () {
            var bitmapData = this._bitmapData;
            if (bitmapData.dispose) {
                bitmapData.dispose();
            }
        };
        __egretProto__._clone = function () {
            var texture = new Texture();
            texture._bitmapData = this._bitmapData;
            return texture;
        };
        /**
         * @private
         */
        __egretProto__.draw = function (context, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, renderType) {
        };
        /**
         * 转换成base64字符串，如果图片（或者包含的图片）跨域，则返回null。
         * native只支持 "image/png" 和 "image/jpeg"；Web中由于各个浏览器的实现不一样，因此建议也只用这2种。
         * @param type 转换的类型，如  "image/png"。
         * @param rect 需要转换的区域
         * @returns {any} base64字符串
         * @version Egret 2.4
         */
        __egretProto__.toDataURL = function (type, rect) {
            throw new Error();
        };
        /**
         * 裁剪指定区域并保存成图片。
         * native只支持 "image/png" 和 "image/jpeg"；Web中由于各个浏览器的实现不一样，因此建议也只用这2种。
         * @param type 转换的类型，如  "image/png"
         * @param filePath 图片的名称的路径（主目录为游戏的私有空间，路径中不能有 "../"，Web只支持传名称。）
         * @param rect 需要转换的区域
         * @version Egret 2.4
         * @platform Native
         */
        __egretProto__.saveToFile = function (type, filePath, rect) {
            throw new Error();
        };
        __egretProto__._drawForCanvas = function (context, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, renderType) {
            var bitmapData = this._bitmapData;
            if (!bitmapData || !bitmapData["avaliable"]) {
                return;
            }
            if (renderType != undefined) {
                this._drawRepeatImageForCanvas(context, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, renderType);
            }
            else {
                context.drawImage(bitmapData, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
            }
        };
        __egretProto__._drawForNative = function (context, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, renderType) {
            var bitmapData = this._bitmapData;
            if (!bitmapData || !bitmapData["avaliable"]) {
                return;
            }
            if (renderType !== undefined) {
                this._drawRepeatImageForNative(context, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, renderType);
            }
            else {
                context.drawImage(bitmapData, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
            }
        };
        __egretProto__._drawRepeatImageForNative = function (context, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, repeat) {
            var texture_scale_factor = egret.MainContext.instance.rendererContext._texture_scale_factor;
            sourceWidth = sourceWidth * texture_scale_factor;
            sourceHeight = sourceHeight * texture_scale_factor;
            for (var x = destX; x < destWidth; x += sourceWidth) {
                for (var y = destY; y < destHeight; y += sourceHeight) {
                    var destW = Math.min(sourceWidth, destWidth - x);
                    var destH = Math.min(sourceHeight, destHeight - y);
                    this._drawForNative(context, sourceX, sourceY, destW / texture_scale_factor, destH / texture_scale_factor, x, y, destW, destH, undefined);
                }
            }
        };
        __egretProto__._drawRepeatImageForCanvas = function (context, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, repeat) {
            if (this['pattern'] === undefined) {
                var texture_scale_factor = egret.MainContext.instance.rendererContext._texture_scale_factor;
                var image = this._bitmapData;
                var tempImage = image;
                if (image.width != sourceWidth || image.height != sourceHeight || texture_scale_factor != 1) {
                    var tempCanvas = document.createElement("canvas");
                    tempCanvas.width = sourceWidth * texture_scale_factor;
                    tempCanvas.height = sourceHeight * texture_scale_factor;
                    tempCanvas.getContext("2d").drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, sourceWidth * texture_scale_factor, sourceHeight * texture_scale_factor);
                    tempImage = tempCanvas;
                }
                var pat = context.createPattern(tempImage, repeat);
                this['pattern'] = pat;
            }
            var pattern = this['pattern'];
            context.fillStyle = pattern;
            context.translate(destX, destY);
            context.fillRect(0, 0, destWidth, destHeight);
            context.translate(-destX, -destY);
        };
        __egretProto__._disposeForCanvas = function () {
            Texture.deleteWebGLTexture(this);
            var bitmapData = this._bitmapData;
            bitmapData.onload = null;
            bitmapData.onerror = null;
            //替换为1x1透明图片
            bitmapData.src = "data:image/png;base64,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";
            bitmapData["avaliable"] = false;
            console.log("_disposeForCanvas");
        };
        __egretProto__._disposeForNative = function () {
            var bitmapData = this._bitmapData;
            bitmapData.dispose();
            bitmapData["avaliable"] = false;
            console.log("_disposeForNative");
        };
        /**
         * @private
         */
        Texture.deleteWebGLTexture = function (texture) {
            var bitmapData = texture._bitmapData;
            if (bitmapData) {
                var webGLTexture = bitmapData.webGLTexture;
                if (webGLTexture) {
                    for (var key in webGLTexture) {
                        var glTexture = webGLTexture[key];
                        var gl = glTexture.glContext;
                        gl.deleteTexture(glTexture);
                    }
                }
                bitmapData.webGLTexture = null;
            }
        };
        /**
         * @private
         */
        Texture.createBitmapData = function (url, callback) {
        };
        Texture._createBitmapDataForCanvasAndWebGl = function (url, callback) {
            var bitmapData = Texture._bitmapDataFactory[url];
            if (!bitmapData) {
                bitmapData = document.createElement("img");
                bitmapData.setAttribute("bitmapSrc", url);
                Texture._bitmapDataFactory[url] = bitmapData;
            }
            if (bitmapData["avaliable"]) {
                callback(0, bitmapData);
                return;
            }
            bitmapData.crossOrigin = Texture.crossOrigin;
            var winURL = window["URL"] || window["webkitURL"];
            if (Texture._bitmapCallbackMap[url] == null) {
                Texture._addToCallbackList(url, callback);
                if (url.indexOf("data:") != 0 && url.indexOf("http:") != 0 && url.indexOf("https:") != 0 && (egret.Browser.getInstance().isIOS() && parseInt(egret.Browser.getInstance().getIOSVersion().charAt(0)) >= 7) && winURL) {
                    var xhr = new XMLHttpRequest();
                    xhr.open("get", url, true);
                    xhr.responseType = "blob";
                    xhr.onerror = function () {
                        Texture._onError(url, bitmapData);
                    };
                    xhr.onload = function () {
                        if (this.status == 200) {
                            var blob = this.response;
                            bitmapData.onload = function () {
                                winURL.revokeObjectURL(bitmapData.src); // 清除释放
                                Texture._onLoad(url, bitmapData);
                            };
                            bitmapData.onerror = function () {
                                Texture._onError(url, bitmapData);
                            };
                            bitmapData.src = winURL.createObjectURL(blob);
                        }
                        else {
                            Texture._onError(url, bitmapData);
                        }
                    };
                    xhr.send();
                }
                else {
                    bitmapData.onload = function () {
                        Texture._onLoad(url, bitmapData);
                    };
                    bitmapData.onerror = function () {
                        Texture._onError(url, bitmapData);
                    };
                    bitmapData.src = url;
                }
            }
            else {
                Texture._addToCallbackList(url, callback);
            }
        };
        Texture._onLoad = function (url, bitmapData) {
            bitmapData["avaliable"] = true;
            if (bitmapData.onload) {
                bitmapData.onload = null;
            }
            if (bitmapData.onerror) {
                bitmapData.onerror = null;
            }
            var list = Texture._bitmapCallbackMap[url];
            if (list && list.length) {
                delete Texture._bitmapCallbackMap[url];
                var l = list.length;
                for (var i = 0; i < l; i++) {
                    var callback = list[i];
                    callback(0, bitmapData);
                }
            }
        };
        Texture._onError = function (url, bitmapData) {
            var list = Texture._bitmapCallbackMap[url];
            if (list && list.length) {
                delete Texture._bitmapCallbackMap[url];
                var l = list.length;
                for (var i = 0; i < l; i++) {
                    var callback = list[i];
                    callback(1, bitmapData);
                }
            }
        };
        Texture._createBitmapDataForNative = function (url, callback) {
            console.log("_createBitmapDataForNative:" + url);
            var bitmapData = Texture._bitmapDataFactory[url];
            if (!bitmapData) {
                if (egret["NativeNetContext"].__use_asyn) {
                    if (Texture._bitmapCallbackMap[url]) {
                        Texture._addToCallbackList(url, callback);
                    }
                    else {
                        Texture._addToCallbackList(url, callback);
                        var promise = new egret.PromiseObject();
                        promise.onSuccessFunc = function (bitmapData) {
                            Texture._bitmapDataFactory[url] = bitmapData;
                            Texture._onLoad(url, bitmapData);
                        };
                        promise.onErrorFunc = function () {
                            Texture._onError(url, null);
                        };
                        console.log("addTextureAsyn");
                        egret_native.Texture.addTextureAsyn(url, promise);
                    }
                }
                else {
                    console.log("addTexture");
                    bitmapData = egret_native.Texture.addTexture(url);
                    Texture._bitmapDataFactory[url] = bitmapData;
                    bitmapData["avaliable"] = true;
                    callback(0, bitmapData);
                }
            }
            else if (bitmapData["avaliable"]) {
                callback(0, bitmapData);
            }
            else {
                console.log("reload");
                bitmapData.reload();
                bitmapData["avaliable"] = true;
                callback(0, bitmapData);
            }
        };
        Texture._addToCallbackList = function (url, callback) {
            var list = Texture._bitmapCallbackMap[url];
            if (!list) {
                list = [];
            }
            list.push(callback);
            Texture._bitmapCallbackMap[url] = list;
        };
        /**
         * 当从其他站点加载一个图片时，指定是否启用跨域资源共享(CORS)，默认值为null。
         * 可以设置为"anonymous","use-credentials"或null。
         */
        Texture.crossOrigin = null;
        Texture._bitmapDataFactory = {};
        Texture._bitmapCallbackMap = {};
        return Texture;
    })(egret.HashObject);
    egret.Texture = Texture;
    Texture.prototype.__class__ = "egret.Texture";
})(egret || (egret = {}));
