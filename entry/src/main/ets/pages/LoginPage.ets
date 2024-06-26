import router from '@ohos.router';

@Entry
@Component
struct Login {
  private userName: string = ''
  private password: string = ''
  private userType: string = 'nurse';
  private message: string = '';
  private isHoverLogin: boolean = false
  private isHoverFingerprint: boolean = false

  private base64Encode(str: string): string {
    return globalThis.btoa(str);
  }

  private async handleLogin() {
    // 登录处理逻辑
    console.log('Login clicked')

    const encryptedUsername = this.base64Encode(this.userName);
    const encryptedPassword = this.base64Encode(this.password);

    const httpRequest = globalThis.requireNapi('http');
    httpRequest.request({
      url: 'https://192.168.106.1:3000/login',  // 替换为实际的登录 API 地址
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      extraData: JSON.stringify({
        username: encryptedUsername,
        password: encryptedPassword
      }),
      success: (data) => {
        console.log('Login successful:', data)
        // 在此处理成功的登录逻辑，例如跳转到另一个页面
        router.pushUrl({
          url: 'pages/MainPage'
        })
      },
      fail: (data, code) => {
        console.error('Login failed:', code)
        // 显示错误信息
        console.log('Error: Login failed - ' + code)
      }
    });
  }

  private handleFingerprintLogin() {
    // 面容登录处理逻辑
    console.log('Fingerprint login clicked')

    // 模拟面容识别逻辑，请根据实际情况替换为面容识别代码
    const faceRecognition = globalThis.requireNapi('faceRecognition');
    faceRecognition.authenticate({
      success: (result) => {
        console.log('Face recognition successful:', result)
        const encryptedUsername = this.base64Encode(this.userName);

        const httpRequest = globalThis.requireNapi('http');
        httpRequest.request({
          url: 'https://192.168.106.1:3000/login',  // 替换为实际的登录 API 地址
          method: 'POST',
          header: {
            'Content-Type': 'application/json'
          },
          extraData: JSON.stringify({
            username: encryptedUsername,
            faceToken: result.token  // 使用面容识别返回的 token 进行登录
          }),
          success: (data) => {
            console.log('Login successful:', data)
            // 在此处理成功的登录逻辑，例如跳转到另一个页面
            router.pushUrl({
              url: 'pages/MainPage'
            })
          },
          fail: (data, code) => {
            console.error('Login failed:', code)
            // 显示错误信息
            console.log('Error: Login failed - ' + code)
          }
        });
      },
      fail: (error) => {
        console.error('Face recognition failed:', error)
        // 显示错误信息
        console.log('Error: Face recognition failed - ' + error)
      }
    });
  }

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
        .onClick(()=>{
          router.pushUrl({
            url:'pages/MainPage'
          })
        })

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