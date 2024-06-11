import router from '@ohos.router';

@Entry
@Component

struct Main {
  //PDA病人信息
  private patientName: string = '李小九'
  private patientAge: number = 70
  private patientGender: string = '男'
  private admissionDate: string = '2020/08/09'
  private roomNumber: string = '0133'
  private mainDoctor: string = '张 虹'
  private responsibleNurse: string = '李晓慧'
  private doctorAdvice: string = '每天早上服用一粒药物'
  @State private isAdviceExecuted: boolean = false
  @State private  completedPatients: Array<string> = []

  build() {

    Column(){
      Text('四川大学华西医院')
        .fontSize(24)
        .textAlign(TextAlign.Center)
        .fontWeight(FontWeight.Bold)
        .margin({ bottom: 20 })
      Column(){

      }
      .alignItems(HorizontalAlign.Start)
      .justifyContent(FlexAlign.Center)
      .width('90%')
      .padding(20)
      .backgroundColor('#f8f8f8')
      .borderRadius(10)
      .shadow({
        color: Color.Black,
        offsetX: 0,
        offsetY: 10,
        radius:20
      })
      Row(){
        Column(){
          Text(`姓名: ${this.patientName}`)
            .fontSize(18)
            .margin({ bottom: 10 })

          Text(`年龄: ${this.patientAge}`)
            .fontSize(18)
            .margin({ bottom: 10 })

          Text(`性别: ${this.patientGender}`)
            .fontSize(18)
            .margin({ bottom: 10 })

          Text(`入院日期: ${this.admissionDate}`)
            .fontSize(18)
            .margin({ bottom: 10 })
        }
        .width('50%')
        .padding(10)
        Column(){
          Text(`床号: ${this.roomNumber}`)
            .fontSize(18)
            .margin({ bottom: 10 })

          Text(`主管医生: ${this.mainDoctor}`)
            .fontSize(18)
            .margin({ bottom: 10 })

          Text(`责任护士: ${this.responsibleNurse}`)
            .fontSize(18)
            .margin({ bottom: 10 })


        }
        .width("50%")
        .padding(10)

      }
      Text(`医嘱: ${this.doctorAdvice}`)
        .fontSize(18)
        .margin({ bottom: 20 })
      Column(){
        Text('是否执行医嘱:')
          .fontSize(18)
          .margin({ bottom: 10 })
        Row(){
          Checkbox()
            .select(this.isAdviceExecuted)
            .onChange((value: boolean) => {this.isAdviceExecuted = value
              if (value) {
                this.completedPatients.push(this.patientName)
              } else {
                this.completedPatients = this.completedPatients.filter(name => name !== this.patientName)
              }})
            .margin({ right: 10 })
          Text('已完成')
            .fontSize(18)
        }
        .alignItems(VerticalAlign.Center)
        .justifyContent(FlexAlign.Start)
        Row(){
          Checkbox()
            .select(!this.isAdviceExecuted)
            .onChange((value: boolean) => {this.isAdviceExecuted = !value
              if (!value) {
                this.completedPatients.push(this.patientName)
              } else {
                this.completedPatients = this.completedPatients.filter(name => name !== this.patientName)
              }})
            .margin({ right: 10 })
          Text('未完成')
            .fontSize(18)
        }
        .alignItems(VerticalAlign.Center)
        .justifyContent(FlexAlign.Start)
        .margin({top:10})
      }
      .alignItems(HorizontalAlign.Start)
      .justifyContent(FlexAlign.Center)
      .width('90%')
      .padding(20)
      .margin({top:30})
      .backgroundColor('#FFD700')
      .borderRadius(10)
      .shadow({
        color: Color.Black,
        offsetX: 0,
        offsetY: 10,
        radius:20
      })
      Navigator({target:'pages/ListPage'}){
        Button('查看已完成医嘱的病人')
          .fontSize(20)
          .padding({ top: 10, bottom: 10, left: 30, right: 30 })
          .backgroundColor(Color.Green)
          .fontColor(Color.White)
          .borderRadius(5)
      }
      .params({completedPatients: this.completedPatients })
    }


    .alignItems(HorizontalAlign.Center)
    .justifyContent(FlexAlign.Center)
    .width('100%')
    .height('100%')
    .backgroundColor('#E9967A')

  }

}