import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  TuiArcChartModule,
  TuiAxesModule,
  TuiBarChartModule,
  TuiBarModule,
  TuiBarSetModule,
  TuiLegendItemModule,
  TuiLineChartModule,
  TuiLineDaysChartModule,
  TuiPieChartModule,
  TuiRingChartModule,
} from '@taiga-ui/addon-charts';
import {
  TuiCardModule,
  TuiCurrencyPipeModule,
  TuiFormatCardModule,
  TuiInputCVCModule,
  TuiInputCardGroupedModule,
  TuiInputCardModule,
  TuiInputExpireModule,
  TuiMoneyModule,
} from '@taiga-ui/addon-commerce';
import {
  TuiAppBarModule,
  TuiElasticStickyModule,
  TuiMobileCalendarDialogModule,
  TuiMobileCalendarModule,
  TuiMobileDialogModule,
  TuiMobileTabsModule,
  TuiPullToRefreshModule,
  TuiRippleModule,
  TuiSheetDialogModule,
  TuiSheetModule,
  TuiSidebarModule,
  TuiTabBarModule,
  TuiThemeAndroidModule,
  TuiThemeIosModule,
  TuiTouchableModule,
} from '@taiga-ui/addon-mobile';
import {
  TuiPreviewActionModule,
  TuiPreviewDialogModule,
  TuiPreviewModule,
} from '@taiga-ui/addon-preview';
import {
  TuiReorderModule,
  TuiTableFiltersModule,
  TuiTableModule,
  TuiTablePaginationModule,
} from '@taiga-ui/addon-table';
import { TuiTableBarsHostModule } from '@taiga-ui/addon-tablebars';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //TuiCharts
    TuiArcChartModule,
    TuiAxesModule,
    TuiBarChartModule,
    TuiBarModule,
    TuiBarSetModule,
    TuiLegendItemModule,
    TuiLineChartModule,
    TuiLineDaysChartModule,
    TuiPieChartModule,
    TuiRingChartModule,

    //TuiCommerce
    TuiCardModule,
    TuiCurrencyPipeModule,
    TuiFormatCardModule,
    TuiInputCVCModule,
    TuiInputCardGroupedModule,
    TuiInputCardModule,
    TuiInputExpireModule,
    TuiMoneyModule,

    //TuiMobile
    TuiAppBarModule,
    TuiElasticStickyModule,
    TuiMobileCalendarDialogModule,
    TuiMobileCalendarModule,
    TuiMobileDialogModule,
    TuiMobileTabsModule,
    TuiPullToRefreshModule,
    TuiRippleModule,
    TuiSheetDialogModule,
    TuiSheetModule,
    TuiSidebarModule,
    TuiTabBarModule,
    TuiThemeAndroidModule,
    TuiThemeIosModule,
    TuiTouchableModule,

    //TuiPreview
    TuiPreviewActionModule,
    TuiPreviewDialogModule,
    TuiPreviewModule,

    //TuiTable
    TuiReorderModule,
    TuiTableFiltersModule,
    TuiTableModule,
    TuiTablePaginationModule,

    //TuiTableBars
    TuiTableBarsHostModule,
  ],

  exports: [
    //TuiCharts
    TuiArcChartModule,
    TuiAxesModule,
    TuiBarChartModule,
    TuiBarModule,
    TuiBarSetModule,
    TuiLegendItemModule,
    TuiLineChartModule,
    TuiLineDaysChartModule,
    TuiPieChartModule,
    TuiRingChartModule,

    //TuiCommerce
    TuiCardModule,
    TuiCurrencyPipeModule,
    TuiFormatCardModule,
    TuiInputCVCModule,
    TuiInputCardGroupedModule,
    TuiInputCardModule,
    TuiInputExpireModule,
    TuiMoneyModule,

    //TuiMobile
    TuiAppBarModule,
    TuiElasticStickyModule,
    TuiMobileCalendarDialogModule,
    TuiMobileCalendarModule,
    TuiMobileDialogModule,
    TuiMobileTabsModule,
    TuiPullToRefreshModule,
    TuiRippleModule,
    TuiSheetDialogModule,
    TuiSheetModule,

    //TuiPreview
    TuiPreviewActionModule,
    TuiPreviewDialogModule,
    TuiPreviewModule,

    //TuiTable
    TuiReorderModule,
    TuiTableFiltersModule,
    TuiTableModule,
    TuiTablePaginationModule,

    //TuiTableBars
    TuiTableBarsHostModule,
  ],
})
export class AddOnModule {}
