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
     * @class egret.VerticalAlign
     * @classdesc 垂直对齐方式
     * @see http://edn.egret.com/cn/index.php?g=&m=article&a=index&id=144&terms1_id=25&terms2_id=33 文本布局
     */
    var VerticalAlign = (function () {
        function VerticalAlign() {
        }
        var __egretProto__ = VerticalAlign.prototype;
        /**
         * 顶对齐
         * @constant egret.VerticalAlign.TOP
         */
        VerticalAlign.TOP = "top";
        /**
         * 底对齐
         * @constant egret.VerticalAlign.BOTTOM
         */
        VerticalAlign.BOTTOM = "bottom";
        /**
         * 垂直居中对齐
         * @constant egret.VerticalAlign.MIDDLE
         */
        VerticalAlign.MIDDLE = "middle";
        /**
         * 垂直两端对齐
         * 注意：TextFiled不支持此对齐方式。
         * @constant egret.VerticalAlign.JUSTIFY
         */
        VerticalAlign.JUSTIFY = "justify";
        /**
         * 相对于容器对子项进行内容对齐。这会将所有子项的大小统一调整为容器的"内容高度"。
         * 容器的"内容高度"是最大子项的大小,如果所有子项都小于容器的高度，则会将所有子项的大小调整为容器的高度。
         * 注意：TextFiled不支持此对齐方式。
         * @constant egret.VerticalAlign.CONTENT_JUSTIFY
         */
        VerticalAlign.CONTENT_JUSTIFY = "contentJustify";
        return VerticalAlign;
    })();
    egret.VerticalAlign = VerticalAlign;
    VerticalAlign.prototype.__class__ = "egret.VerticalAlign";
})(egret || (egret = {}));
