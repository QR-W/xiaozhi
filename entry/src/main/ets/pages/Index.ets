@Entry
@Component
struct Login {
  private userName: string = ''
  private password: string = ''
  private isHoverLogin: boolean = false
  private isHoverFingerprint: boolean = false
  private handleLogin() {
    // 登录处理逻辑
    console.log('Login clicked')
  }

  private handleFingerprintLogin() {
    // 指纹或面容登录处理逻辑
    console.log('Fingerprint login clicked')}
  build() {

    Column() {
      Image($r("app.media.Logo"))
        .width(80)
        .height(80)
        .margin(({ bottom: '20vp' }))
      Text("医小智")
        .fontSize(30)
        .textAlign(TextAlign.Center)
        .fontWeight(FontWeight.Bold)
        .margin({ bottom: 30 })

      Column() {
        TextInput({
          placeholder:'用户名'
        })
          .placeholderColor('#ffff')
          .fontSize(20)
          .fontColor(Color.White)
          .padding({ top: 20, bottom: 20, left: 20, right: 20 })
          .backgroundColor(Color.Transparent)
          .width('100%')

      }
      .alignItems(HorizontalAlign.Center)
      .justifyContent(FlexAlign.Start)
      .width('100%')
      .margin({bottom: 40 })
      .border({
        width: { left: 0, right: 0, top: 0, bottom: 1 },
        color: Color.White,
        style: BorderStyle.Solid
      })
      Column(){
        TextInput({
          placeholder:'密码'
        })
          .placeholderColor('#ffff')
          .type(InputType.Password)
          .fontSize(20)
          .fontColor(Color.White)
          .padding({ top: 20, bottom: 20, left: 20, right: 20 })
          .backgroundColor(Color.Transparent)
          .width('100%')
      }
      .alignItems(HorizontalAlign.Center)
      .justifyContent(FlexAlign.Start)
      .width('100%')
      .margin({bottom: 40 })
      .border({
        width: { left: 0, right: 0, top: 0, bottom: 1 },
        color: Color.White,
        style: BorderStyle.Solid
      })

      Button('登录')
        .fontSize(20)
        .backgroundColor(this.isHoverLogin ? ('#03a9f4') : ('#03e9f4'))
        .fontColor(Color.White)
        .padding({ top: 10, bottom: 10, left: 50, right: 50 })
        .margin({ top: 20 })
        .borderRadius(5)
        .hoverEffect(HoverEffect.Scale)
        .onHover((isHover?: boolean) => {
          console.info('Login button isHover: ' + isHover)
          this.isHoverLogin = isHover as boolean
        })
        .onClick(() => this.handleLogin())

      Button('面容登录')
        .fontSize(20)
        .backgroundColor("#03e9f4")
        .fontColor(Color.White)
        .padding({ top: 10, bottom: 10, left: 30, right: 30 })
        .margin({ top: 20 })
        .borderRadius(5)
        .hoverEffect(HoverEffect.Scale)
        .onHover((isHover?: boolean) => {
          console.info('Login button isHover: ' + isHover)
          this.isHoverLogin = isHover as boolean
        })
        .onClick(() => this.handleFingerprintLogin())

    }
    .alignItems(HorizontalAlign.Center)
    .justifyContent(FlexAlign.Center)
    .width('100%')
    .height('100%')
    .backgroundColor('#E9967A')


  }

}