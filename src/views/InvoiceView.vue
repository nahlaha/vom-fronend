
<template>
    <b-container class="p-4">
        <div class="d-flex justify-content-between p-2 pb-3 mb-3 border-bottom">
            <div class="border blue-border img border-3">
                <img src="@/assets/images/qr_code_img.png" width="120" alt="image" />
            </div>

            <div class="d-flex align-items-end flex-column flex-wrap">
                <b-card no-body class="main-card green-border text-center mb-2">
                    <div class="p-1"> فاتورة ضريبية</div>
                </b-card>
                <div class="d-flex justify-content-between w-100">
                    <b-card class="green-border text-center">
                        <div class="p-1"> التاريخ</div>
                    </b-card>
                    <b-card class=" green-border text-center ml-2">
                        <div class="p-1"> الرقم التسلسلى</div>
                    </b-card>
                </div>
            </div>

        </div>
        <div class="d-grid gap-3" style="font-size: small;">
            <div class="p-2">
                <div class="d-flex justify-content-between w-100">
                    <div class="p-2 flex-shrink-1 border blue-border">رقم السجل التجارى</div>
                    <div class="p-2 w-100 border ms-2 green-border">
                        <div class="d-flex justify-content-end mb-2">
                            معلومات البائع
                        </div>
                        <div class="d-flex justify-content-end">
                            <div class="border-end pe-2 mb-3">
                                <span class="d-flex justify-content-end">
                                    رقم تسجيل ضريبة القيمة المضافة للبائع
                                </span>
                            </div>
                            <div class="px-2 border-end mb-3">رقم السجل التجارى</div>
                            <div class="px-2 border-end mb-3">عنوان البائع</div>
                            <div class="px-2 border-end mb-3">اسم البائع</div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="p-2">
                <div class="p-2 border w-100 green-border">
                    <div class="d-flex justify-content-end mb-2">
                        معلومات المشتري
                    </div>
                    <div class="d-flex justify-content-end mb-1">
                        <div class="border-end pe-2 mb-3">
                            <span class="d-flex justify-content-end">
                                رقم تسجيل ضريبة القيمة المضافة للمشترى
                            </span>
                        </div>
                        <div class="border-end px-2 mb-3">رقم السجل التجارى</div>
                        <div class="border-end px-2 mb-3">عنوان البائع</div>
                        <div class="border-end px-2 mb-3">اسم البائع</div>

                    </div>
                </div>
            </div>
            <div class="p-2">
                <div class="d-flex justify-content-end">
                    <div class="border pe-1 me-1 blue-border" style="padding-left: 13rem;">
                        <span class="w-100"> المجمع شامل ضريبة القيمة المضافة
                        </span>
                    </div>
                    <div class="border px-1 mx-1  green-border">
                        <b-row>
                            <b-col>نيبة الضريبة </b-col>
                            <b-col>قيمة الضريبة</b-col>
                        </b-row>
                    </div>
                    <div class="border px-1 mx-1 blue-border">
                        المجموع الفرعى بدون الضريبة
                    </div>
                    <div class="border px-1 ms-1 green-border">
                        <b-row>
                            <b-col>الكمية</b-col>
                            <b-col>سعر الوحدة</b-col>
                            <b-col>المنتج</b-col>
                        </b-row>
                    </div>
                </div>
            </div>
        </div>

        <div class="p-2 mt-2 d-grid gap-1">
            <div class="p-1 pe-3 d-flex justify-content-end border blue-border">
                المجموع
            </div>
            <div class="p-1 pe-3 d-flex justify-content-end border green-border">
                ضريبة القيمة المضافة
            </div>
            <div class="p-1 pe-3 d-flex justify-content-end border green-border">
                المجموع مع الضريبة
            </div>
        </div>

    </b-container>
</template>

<style scoped>
.blue-border {
    border-color: hsla(190, 91%, 45%, 0.233) !important;
    border-width: 3px !important;

}

.green-border {
    border-color: hsla(155, 94%, 27%, 0.233) !important;
    border-width: 3px !important;

}

.img {
    width: 120px;
}

.main-card {
    padding-right: 1.5rem !important;
    padding-left: 6.5rem !important;
    border-width: 3px !important;
    font-size: 1.5rem !important;
    font-family: sans-serif !important;
}


@media (min-width: 1024px) {}
</style>