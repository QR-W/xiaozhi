@Entry
@Component

struct Main {
  private patientName: string = '李小九'
  private patientAge: number = 70
  private patientGender: string = '男'
  private admissionDate: string = '2020/08/09'
  private roomNumber: string = '0133'
  private mainDoctor: string = '张 虹'
  private responsibleNurse: string = '李晓慧'
  private doctorAdvice: string = '每天早上服用一粒药物'
  private isAdviceExecuted: boolean = false
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
    }


    .alignItems(HorizontalAlign.Center)
    .justifyContent(FlexAlign.Center)
    .width('100%')
    .height('100%')
    .backgroundColor('#E9967A')

  }

}