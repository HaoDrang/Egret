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
     * @class egret.RendererContext
     * @classdesc
     * RenderContext是游戏的渲染上下文。
     * 这是一个抽象基类，制定主要的接口
     * @extends egret.HashObject
     * @private
     */
    var RendererContext = (function (_super) {
        __extends(RendererContext, _super);
        /**
         * @method egret.RendererContext#constructor
         */
        function RendererContext() {
            _super.call(this);
            /**
             * 渲染全部纹理的时间开销
             * @member egret.RendererContext#renderCost
             */
            this.renderCost = 0;
            /**
             * 绘制纹理的缩放比率，默认值为1
             * @member egret.RendererContext#texture_scale_factor
             */
            this._texture_scale_factor = 1;
            this.profiler = egret.Profiler.getInstance();
            if (!RendererContext.blendModesForGL) {
                RendererContext.initBlendMode();
            }
        }
        var __egretProto__ = RendererContext.prototype;
        Object.defineProperty(__egretProto__, "texture_scale_factor", {
            get: function () {
                return this._texture_scale_factor;
            },
            set: function (value) {
                this._setTextureScaleFactor(value);
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__._setTextureScaleFactor = function (value) {
            this._texture_scale_factor = value;
        };
        /**
         * @method egret.RendererContext#clearScreen
         * @private
         */
        __egretProto__.clearScreen = function () {
        };
        /**
         * 清除Context的渲染区域
         * @method egret.RendererContext#clearRect
         * @param x {number}
         * @param y {number}
         * @param w {number}
         * @param h {numbe}
         */
        __egretProto__.clearRect = function (x, y, w, h) {
        };
        /**
         * 绘制图片
         * @method egret.RendererContext#drawImage
         * @param texture {Texture}
         * @param sourceX {any}
         * @param sourceY {any}
         * @param sourceWidth {any}
         * @param sourceHeight {any}
         * @param destX {any}
         * @param destY {any}
         * @param destWidth {any}
         * @param destHeigh {any}
         */
        __egretProto__.drawImage = function (texture, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, repeat) {
            if (repeat === void 0) { repeat = "no-repeat"; }
            this.profiler.onDrawImage();
        };
        /**
         * 绘制9宫图片
         * @method egret.RendererContext#drawImageScale9
         * @param texture {Texture}
         * @param sourceX {any}
         * @param sourceY {any}
         * @param sourceWidth {any}
         * @param sourceHeight {any}
         * @param destX {any}
         * @param destY {any}
         * @param destWidth {any}
         * @param destHeigh {any}
         */
        __egretProto__.drawImageScale9 = function (texture, sourceX, sourceY, sourceWidth, sourceHeight, offX, offY, destWidth, destHeight, rect) {
            return false;
        };
        __egretProto__._addOneDraw = function () {
            this.profiler.onDrawImage();
        };
        /**
         * 变换Context的当前渲染矩阵
         * @method egret.RendererContext#setTransform
         * @param matrix {egret.Matri}
         */
        __egretProto__.setTransform = function (matrix) {
        };
        /**
         * 设置渲染alpha
         * @method egret.RendererContext#setAlpha
         * @param value {number}
         * @param blendMode {egret.BlendMod}
         */
        __egretProto__.setAlpha = function (value, blendMode) {
        };
        /**
         * 设置渲染文本参数
         * @method egret.RendererContext#setupFont
         * @param textField {TextField}
         */
        __egretProto__.setupFont = function (textField, style) {
            if (style === void 0) { style = null; }
        };
        /**
         * 测量文本
         * @method egret.RendererContext#measureText
         * @param text {string}
         * @returns {number}
         * @stable B 参数很可能会需要调整，和setupFont整合
         */
        __egretProto__.measureText = function (text) {
            return 0;
        };
        /**
         * 绘制文本
         * @method egret.RendererContext#drawText
         * @param textField {egret.TextField}
         * @param text {string}
         * @param x {number}
         * @param y {number}
         * @param maxWidth {numbe}
         */
        __egretProto__.drawText = function (textField, text, x, y, maxWidth, style) {
            if (style === void 0) { style = null; }
            this.profiler.onDrawImage();
        };
        __egretProto__.strokeRect = function (x, y, w, h, color) {
        };
        __egretProto__.pushMask = function (mask) {
        };
        __egretProto__.popMask = function () {
        };
        __egretProto__.onRenderStart = function () {
        };
        __egretProto__.onRenderFinish = function () {
        };
        __egretProto__.createLinearGradient = function (x0, y0, x1, y1) {
            return null;
        };
        __egretProto__.createRadialGradient = function (x0, y0, r0, x1, y1, r1) {
            return null;
        };
        __egretProto__.setGlobalFilters = function (filterData) {
        };
        __egretProto__.drawCursor = function (x1, y1, x2, y2) {
        };
        RendererContext.createRendererContext = function (canvas) {
            return null;
        };
        RendererContext.initBlendMode = function () {
            RendererContext.blendModesForGL = {};
            RendererContext.blendModesForGL[egret.BlendMode.NORMAL] = [1, 771];
            RendererContext.blendModesForGL[egret.BlendMode.ADD] = [770, 1];
            RendererContext.blendModesForGL[egret.BlendMode.ERASE] = [0, 771];
            RendererContext.blendModesForGL[egret.BlendMode.ERASE_REVERSE] = [0, 770];
        };
        /**
         * 设置 gl 模式下的blendMode，canvas模式下不会生效
         * @method egret.RendererContext#registerBlendModeForGL
         * @param key {string} 键值
         * @param src {number} 源颜色因子
         * @param dst {number} 目标颜色因子
         * @param override {boolean} 是否覆盖
         */
        RendererContext.registerBlendModeForGL = function (key, src, dst, override) {
            if (RendererContext.blendModesForGL[key] && !override) {
                egret.$warn(1005, key);
            }
            else {
                RendererContext.blendModesForGL[key] = [src, dst];
            }
        };
        /**
         * 是否对图像使用平滑处理
         * 该特性目前只支持Canvas
         * @platform Web
         */
        RendererContext.imageSmoothingEnabled = true;
        RendererContext.blendModesForGL = null;
        return RendererContext;
    })(egret.HashObject);
    egret.RendererContext = RendererContext;
    RendererContext.prototype.__class__ = "egret.RendererContext";
})(egret || (egret = {}));
