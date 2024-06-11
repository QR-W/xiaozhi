import router from '@ohos.router';

@Entry
@Component
struct ListPage{
  private completedPatients: Array<string> = []
  onPageShow() {
    const params = router.getParams();

      this.completedPatients = completedPatients;

  }

  build(){
    Column(){
      Text('已完成医嘱的病人列表')
        .fontSize(24)
        .textAlign(TextAlign.Center)
        .fontWeight(700)
        .margin({ bottom: 20 })
      List(){
      }
      .width('90%')
      .height('auto')
      .padding(20)
      .backgroundColor('#f8f8f8')
      .borderRadius(10)
      .shadow({
        color: Color.Black,
        offsetX: 0,
        offsetY: 10,
        radius:20
      })
    }
    .alignItems(HorizontalAlign.Center)
    .justifyContent(FlexAlign.Center)
    .width('100%')
    .height('100%')
    .padding(20)
    .backgroundColor('#E9967A')
  }

}

