class Main extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.patientName = '李小九';
        this.patientAge = 70;
        this.patientGender = '男';
        this.admissionDate = '2020/08/09';
        this.roomNumber = '0133';
        this.mainDoctor = '张 虹';
        this.responsibleNurse = '李晓慧';
        this.doctorAdvice = '每天早上服用一粒药物';
        this.__isAdviceExecuted = new ObservedPropertySimplePU(false, this, "isAdviceExecuted");
        this.__completedPatients = new ObservedPropertyObjectPU([], this, "completedPatients");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.patientName !== undefined) {
            this.patientName = params.patientName;
        }
        if (params.patientAge !== undefined) {
            this.patientAge = params.patientAge;
        }
        if (params.patientGender !== undefined) {
            this.patientGender = params.patientGender;
        }
        if (params.admissionDate !== undefined) {
            this.admissionDate = params.admissionDate;
        }
        if (params.roomNumber !== undefined) {
            this.roomNumber = params.roomNumber;
        }
        if (params.mainDoctor !== undefined) {
            this.mainDoctor = params.mainDoctor;
        }
        if (params.responsibleNurse !== undefined) {
            this.responsibleNurse = params.responsibleNurse;
        }
        if (params.doctorAdvice !== undefined) {
            this.doctorAdvice = params.doctorAdvice;
        }
        if (params.isAdviceExecuted !== undefined) {
            this.isAdviceExecuted = params.isAdviceExecuted;
        }
        if (params.completedPatients !== undefined) {
            this.completedPatients = params.completedPatients;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isAdviceExecuted.purgeDependencyOnElmtId(rmElmtId);
        this.__completedPatients.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isAdviceExecuted.aboutToBeDeleted();
        this.__completedPatients.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get isAdviceExecuted() {
        return this.__isAdviceExecuted.get();
    }
    set isAdviceExecuted(newValue) {
        this.__isAdviceExecuted.set(newValue);
    }
    get completedPatients() {
        return this.__completedPatients.get();
    }
    set completedPatients(newValue) {
        this.__completedPatients.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/MainPage.ets(21:5)");
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
            Text.create('四川大学华西医院');
            Text.debugLine("pages/MainPage.ets(22:7)");
            Text.fontSize(24);
            Text.textAlign(TextAlign.Center);
            Text.fontWeight(FontWeight.Bold);
            Text.margin({ bottom: 20 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/MainPage.ets(27:7)");
            Column.alignItems(HorizontalAlign.Start);
            Column.justifyContent(FlexAlign.Center);
            Column.width('90%');
            Column.padding(20);
            Column.backgroundColor('#f8f8f8');
            Column.borderRadius(10);
            Column.shadow({
                color: Color.Black,
                offsetX: 0,
                offsetY: 10,
                radius: 20
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/MainPage.ets(42:7)");
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/MainPage.ets(43:9)");
            Column.width('50%');
            Column.padding(10);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`姓名: ${this.patientName}`);
            Text.debugLine("pages/MainPage.ets(44:11)");
            Text.fontSize(18);
            Text.margin({ bottom: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`年龄: ${this.patientAge}`);
            Text.debugLine("pages/MainPage.ets(48:11)");
            Text.fontSize(18);
            Text.margin({ bottom: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`性别: ${this.patientGender}`);
            Text.debugLine("pages/MainPage.ets(52:11)");
            Text.fontSize(18);
            Text.margin({ bottom: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`入院日期: ${this.admissionDate}`);
            Text.debugLine("pages/MainPage.ets(56:11)");
            Text.fontSize(18);
            Text.margin({ bottom: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/MainPage.ets(62:9)");
            Column.width("50%");
            Column.padding(10);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`床号: ${this.roomNumber}`);
            Text.debugLine("pages/MainPage.ets(63:11)");
            Text.fontSize(18);
            Text.margin({ bottom: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`主管医生: ${this.mainDoctor}`);
            Text.debugLine("pages/MainPage.ets(67:11)");
            Text.fontSize(18);
            Text.margin({ bottom: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`责任护士: ${this.responsibleNurse}`);
            Text.debugLine("pages/MainPage.ets(71:11)");
            Text.fontSize(18);
            Text.margin({ bottom: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`医嘱: ${this.doctorAdvice}`);
            Text.debugLine("pages/MainPage.ets(81:7)");
            Text.fontSize(18);
            Text.margin({ bottom: 20 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/MainPage.ets(84:7)");
            Column.alignItems(HorizontalAlign.Start);
            Column.justifyContent(FlexAlign.Center);
            Column.width('90%');
            Column.padding(20);
            Column.margin({ top: 30 });
            Column.backgroundColor('#FFD700');
            Column.borderRadius(10);
            Column.shadow({
                color: Color.Black,
                offsetX: 0,
                offsetY: 10,
                radius: 20
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('是否执行医嘱:');
            Text.debugLine("pages/MainPage.ets(85:9)");
            Text.fontSize(18);
            Text.margin({ bottom: 10 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/MainPage.ets(88:9)");
            Row.alignItems(VerticalAlign.Center);
            Row.justifyContent(FlexAlign.Start);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Checkbox.create();
            Checkbox.debugLine("pages/MainPage.ets(89:11)");
            Checkbox.select(this.isAdviceExecuted);
            Checkbox.onChange((value) => {
                this.isAdviceExecuted = value;
                if (value) {
                    this.completedPatients.push(this.patientName);
                }
                else {
                    this.completedPatients = this.completedPatients.filter(name => name !== this.patientName);
                }
            });
            Checkbox.margin({ right: 10 });
            if (!isInitialRender) {
                Checkbox.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Checkbox.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('已完成');
            Text.debugLine("pages/MainPage.ets(98:11)");
            Text.fontSize(18);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/MainPage.ets(103:9)");
            Row.alignItems(VerticalAlign.Center);
            Row.justifyContent(FlexAlign.Start);
            Row.margin({ top: 10 });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Checkbox.create();
            Checkbox.debugLine("pages/MainPage.ets(104:11)");
            Checkbox.select(!this.isAdviceExecuted);
            Checkbox.onChange((value) => {
                this.isAdviceExecuted = !value;
                if (!value) {
                    this.completedPatients.push(this.patientName);
                }
                else {
                    this.completedPatients = this.completedPatients.filter(name => name !== this.patientName);
                }
            });
            Checkbox.margin({ right: 10 });
            if (!isInitialRender) {
                Checkbox.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Checkbox.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('未完成');
            Text.debugLine("pages/MainPage.ets(113:11)");
            Text.fontSize(18);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Navigator.create({ target: 'pages/ListPage' });
            Navigator.debugLine("pages/MainPage.ets(133:7)");
            Navigator.params({ completedPatients: this.completedPatients });
            if (!isInitialRender) {
                Navigator.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('查看已完成医嘱的病人');
            Button.debugLine("pages/MainPage.ets(134:9)");
            Button.fontSize(20);
            Button.padding({ top: 10, bottom: 10, left: 30, right: 30 });
            Button.backgroundColor(Color.Green);
            Button.fontColor(Color.White);
            Button.borderRadius(5);
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Navigator.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Main(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
export {};
//# sourceMappingURL=MainPage.js.map