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
     * @class egret.Shape
     * @classdesc 此类用于使用 Egret 绘图应用程序编程接口 (API) 创建简单形状。Shape 类包括 graphics 属性，该属性使您可以从 Graphics 类访问方法。
     * @see http://edn.egret.com/cn/index.php?g=&m=article&a=index&id=136&terms1_id=25&terms2_id=32 Shape绘制矢量图
     * @includeExample egret/display/Shape.ts
     */
    var Shape = (function (_super) {
        __extends(Shape, _super);
        /**
         * 创建一个 egret.Shape 对象
         */
        function Shape() {
            _super.call(this);
            this._graphics = null;
        }
        var __egretProto__ = Shape.prototype;
        Object.defineProperty(__egretProto__, "graphics", {
            /**
             * 获取 Shape 中的 Graphics 对象。
             * @member {egret.Graphics} egret.Shape#graphics
             */
            get: function () {
                if (!this._graphics) {
                    this._graphics = new egret.Graphics();
                    this.needDraw = true;
                }
                return this._graphics;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__._draw = function (renderContext) {
            if (this._graphics && this._graphics._dirty) {
                this._setCacheDirty();
            }
            _super.prototype._draw.call(this, renderContext);
        };
        __egretProto__._render = function (renderContext) {
            if (this._graphics)
                this._graphics._draw(renderContext);
        };
        __egretProto__._measureBounds = function () {
            var graphics = this._graphics;
            if (!graphics) {
                return _super.prototype._measureBounds.call(this);
            }
            return graphics._measureBounds();
        };
        return Shape;
    })(egret.DisplayObject);
    egret.Shape = Shape;
    Shape.prototype.__class__ = "egret.Shape";
})(egret || (egret = {}));
