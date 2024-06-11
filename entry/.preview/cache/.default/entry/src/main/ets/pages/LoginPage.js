import router from '@ohos:router';
class Login extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.userName = '';
        this.password = '';
        this.isHoverLogin = false;
        this.isHoverFingerprint = false;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.userName !== undefined) {
            this.userName = params.userName;
        }
        if (params.password !== undefined) {
            this.password = params.password;
        }
        if (params.isHoverLogin !== undefined) {
            this.isHoverLogin = params.isHoverLogin;
        }
        if (params.isHoverFingerprint !== undefined) {
            this.isHoverFingerprint = params.isHoverFingerprint;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    handleLogin() {
        // 登录处理逻辑
        console.log('Login clicked');
    }
    handleFingerprintLogin() {
        // 指纹或面容登录处理逻辑
        console.log('Fingerprint login clicked');
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/LoginPage.ets(20:5)");
            Column.alignItems(HorizontalAlign.Center);
            Column.justifyContent(FlexAlign.Center);
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#E9967A');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777220, "type": 20000, params: [], "bundleName": "com.example.xiaozhi", "moduleName": "entry" });
            Image.debugLine("pages/LoginPage.ets(21:7)");
            Image.width(80);
            Image.height(80);
            Image.margin(({ bottom: '20vp' }));
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("医小智");
            Text.debugLine("pages/LoginPage.ets(25:7)");
            Text.fontSize(30);
            Text.textAlign(TextAlign.Center);
            Text.fontWeight(FontWeight.Bold);
            Text.margin({ bottom: 30 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/LoginPage.ets(31:7)");
            Column.alignItems(HorizontalAlign.Center);
            Column.justifyContent(FlexAlign.Start);
            Column.width('100%');
            Column.margin({ bottom: 40 });
            Column.border({
                width: { left: 0, right: 0, top: 0, bottom: 1 },
                color: Color.White,
                style: BorderStyle.Solid
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({
                placeholder: '用户名'
            });
            TextInput.debugLine("pages/LoginPage.ets(32:9)");
            TextInput.placeholderColor('#ffff');
            TextInput.fontSize(20);
            TextInput.fontColor(Color.White);
            TextInput.padding({ top: 20, bottom: 20, left: 20, right: 20 });
            TextInput.backgroundColor(Color.Transparent);
            TextInput.width('100%');
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/LoginPage.ets(52:7)");
            Column.alignItems(HorizontalAlign.Center);
            Column.justifyContent(FlexAlign.Start);
            Column.width('100%');
            Column.margin({ bottom: 40 });
            Column.border({
                width: { left: 0, right: 0, top: 0, bottom: 1 },
                color: Color.White,
                style: BorderStyle.Solid
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({
                placeholder: '密码'
            });
            TextInput.debugLine("pages/LoginPage.ets(53:9)");
            TextInput.placeholderColor('#ffff');
            TextInput.type(InputType.Password);
            TextInput.fontSize(20);
            TextInput.fontColor(Color.White);
            TextInput.padding({ top: 20, bottom: 20, left: 20, right: 20 });
            TextInput.backgroundColor(Color.Transparent);
            TextInput.width('100%');
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('登录');
            Button.debugLine("pages/LoginPage.ets(74:7)");
            Button.fontSize(20);
            Button.backgroundColor(this.isHoverLogin ? ('#03a9f4') : ('#03e9f4'));
            Button.fontColor(Color.White);
            Button.padding({ top: 10, bottom: 10, left: 50, right: 50 });
            Button.margin({ top: 20 });
            Button.borderRadius(5);
            Button.hoverEffect(HoverEffect.Scale);
            Button.onHover((isHover) => {
                console.info('Login button isHover: ' + isHover);
                this.isHoverLogin = isHover;
            });
            Button.onClick(() => {
                router.pushUrl({
                    url: 'pages/MainPage'
                });
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('面容登录');
            Button.debugLine("pages/LoginPage.ets(92:7)");
            Button.fontSize(20);
            Button.backgroundColor("#03e9f4");
            Button.fontColor(Color.White);
            Button.padding({ top: 10, bottom: 10, left: 30, right: 30 });
            Button.margin({ top: 20 });
            Button.borderRadius(5);
            Button.hoverEffect(HoverEffect.Scale);
            Button.onHover((isHover) => {
                console.info('Login button isHover: ' + isHover);
                this.isHoverLogin = isHover;
            });
            Button.onClick(() => this.handleFingerprintLogin());
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Login(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=LoginPage.js.map