(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{196:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"date-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#date-fields","aria-hidden":"true"}},[t._v("#")]),t._v(" Date Fields")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#timezones"}},[t._v("Timezones")])]),s("li",[s("a",{attrs:{href:"#customizing-the-first-day-of-the-week"}},[t._v("Customizing The First Day of the Week")])])])]),s("p"),t._v(" "),s("p",[t._v("Nova offers two types of date fields: "),s("code",[t._v("Date")]),t._v(" and "),s("code",[t._v("DateTime")]),t._v(". As you may have guessed, the "),s("code",[t._v("Date")]),t._v(" field does not store time information, while the "),s("code",[t._v("DateTime")]),t._v(" field does:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Laravel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Nova"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Fields"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Laravel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Nova"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Fields"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("DateTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Birthday'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nDateTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Created At'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"timezones"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timezones","aria-hidden":"true"}},[t._v("#")]),t._v(" Timezones")]),t._v(" "),s("p",[t._v("By default, Nova users will always see dates presented in their local timezone based on their browser's locale information.")]),t._v(" "),s("p",[t._v('In addition, users may always set dates in their local timezone. The dates will automatically be converted to your application\'s "server-side" timezone as defined by the '),s("code",[t._v("timezone")]),t._v(" option in your "),s("code",[t._v("app")]),t._v(" configuration file.")]),t._v(" "),s("h4",{attrs:{id:"customizing-the-timezone"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customizing-the-timezone","aria-hidden":"true"}},[t._v("#")]),t._v(" Customizing The Timezone")]),t._v(" "),s("p",[t._v("Sometimes you may wish to explicitly define the Nova user's timezone instead of using the browser's locale information. For example, perhaps your application allows users to select their own timezone so that they always see consistent date timezones even when traveling around the world.")]),t._v(" "),s("p",[t._v("To accomplish this, you may use the "),s("code",[t._v("Nova::userTimezone")]),t._v(" method. Typically you should call this method in the "),s("code",[t._v("boot")]),t._v(" method of your application's "),s("code",[t._v("NovaServiceProvider")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Laravel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Nova"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Nova")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Bootstrap any application services.\n *\n * @return void\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("boot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("parent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("boot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    Nova"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("userTimezone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Request "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("timezone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"customizing-the-first-day-of-the-week"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customizing-the-first-day-of-the-week","aria-hidden":"true"}},[t._v("#")]),t._v(" Customizing The First Day of the Week")]),t._v(" "),s("p",[t._v("By default, Nova's Date and DateTime fields recognize Sunday as the first day of the week (as the United States, Canada, and Japan do). If you wish to customize this to follow the international standard "),s("code",[t._v("ISO 8601")]),t._v(", you can set the "),s("code",[t._v("firstDayOfWeek")]),t._v(" option on the field:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Birthday'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("firstDayOfWeek")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDateTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Created At'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("firstDayOfWeek")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],!1,null,null,null);n.options.__file="date-fields.md";a.default=n.exports}}]);