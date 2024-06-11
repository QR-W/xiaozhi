import router from '@ohos.router';

@Entry
@Component
struct ListPage{
  @State private completedPatients: Array<string> = []
  build(){
    Column(){
Text('欢迎您！')
  .fontSize(50)
    }
    .width("100%")
    .height('100%')
    .backgroundColor(Color.White)
  }
}