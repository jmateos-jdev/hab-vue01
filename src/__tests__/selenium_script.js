import { Builder, By, Key, until } from 'selenium-webdriver';

async function runTest() {
    const driver = await new Builder().forBrowser('chrome').build();
    const testList = []
    try {
        await driver.get('http://localhost:5173');

        driver.manage().window().maximize();

        await new Promise(resolve => setTimeout(resolve, 300));
        
        const test1 = await testBotonSinCampos(driver)
        testList.push({name: 'testBotonSinCampos', result: test1})

        await new Promise(resolve => setTimeout(resolve, 3500));

        const test2 = await testCredencialesInvalidas(driver)
        testList.push({name: 'testCredencialesInvalidas', result: test2})

        await limpiarFormulario(driver)
        await new Promise(resolve => setTimeout(resolve, 3500));

        const test3 = await testFormularioSoloPassword(driver)
        testList.push({name: 'testFormularioSoloPassword', result: test3})

        await limpiarFormulario(driver)
        await new Promise(resolve => setTimeout(resolve, 3500));

        const test4 = await testFormularioSoloEmail(driver)
        testList.push({name: 'testFormularioSoloEmail', result: test4})

        await limpiarFormulario(driver)
        await new Promise(resolve => setTimeout(resolve, 3500));

        const test5 = await testCredencialesValidas(driver)
        testList.push({name: 'testCredencialesValidas', result: test5})

        await new Promise(resolve => setTimeout(resolve, 3500));

        const test6 = await testDashboard(driver)
        testList.push({name: 'testDashboard', result: test6})

        await new Promise(resolve => setTimeout(resolve, 3500));

        const test7 = await testLogout(driver)
        testList.push({name: 'testLogout', result: test7})
        
        await new Promise(resolve => setTimeout(resolve, 3500));

    }catch(error){
        console.error('Error running test:', error);
    }finally{
        console.log(testList);
        await driver.quit();
    }
}

async function testLogout(driver){
    const logoutButton = driver.findElement(By.css('[data-testid="logout-button"]'));
    await logoutButton.click();
    await new Promise(resolve => setTimeout(resolve, 1000));
    const buttonLogin = driver.findElement(By.id('login-button'));
    return buttonLogin !== null
}

async function testDashboard(driver){
    const dashboardTitle = driver.findElement(By.css('[data-testid="dashboard-title"]'));
    const dashboardTitleText = await dashboardTitle.getText();
    return (dashboardTitle && dashboardTitleText == 'Dashboard')
}

async function testCredencialesValidas(driver){
    const buttonLogin = driver.findElement(By.id('login-button'));

    const email = driver.findElement(By.id('email'));
    await email.sendKeys('joaquin.mateos@jdev.com.ar');

    await new Promise(resolve => setTimeout(resolve, 200));

    const password = driver.findElement(By.id('password'));
    await password.sendKeys('123123');

    await new Promise(resolve => setTimeout(resolve, 200));
    // Click en el boton de login
    await buttonLogin.click();

    await new Promise(resolve => setTimeout(resolve, 300));
    
    const dashboardTitle = driver.findElement(By.css('[data-testid="dashboard-title"]'));
    const dashboardTitleText = await dashboardTitle.getText();
    return (dashboardTitle && dashboardTitleText == 'Dashboard')


}

async function limpiarFormulario(driver){
    const email = driver.findElement(By.id('email'));
    await email.clear();
    await driver.executeScript("arguments[0].dispatchEvent(new Event('input', { bubbles: true }));", email);

    const password = driver.findElement(By.id('password'));
    await password.clear();
    await driver.executeScript("arguments[0].dispatchEvent(new Event('input', { bubbles: true }));", password);
}

async function testFormularioSoloPassword(driver){
    const buttonLogin = driver.findElement(By.id('login-button'));
    
    const password = driver.findElement(By.id('password'));
    await password.sendKeys('123456');

    await new Promise(resolve => setTimeout(resolve, 200));
    await buttonLogin.click();

    await new Promise(resolve => setTimeout(resolve, 300));

    const errorMessage = driver.findElement(By.id('error-message'));
    const errorMessageText = await errorMessage.getText();
    return (errorMessage && errorMessageText == 'Por favor, ingrese un correo electrónico y una contraseña')
}

async function testFormularioSoloEmail(driver){
    const buttonLogin = driver.findElement(By.id('login-button'));
     // Ingresamos un correo electrónico
     const email = driver.findElement(By.id('email'));
     await email.sendKeys('test@test.com');

     await new Promise(resolve => setTimeout(resolve, 200));
     await buttonLogin.click();
    await new Promise(resolve => setTimeout(resolve, 300));

     const errorMessage = driver.findElement(By.id('error-message'));
     const errorMessageText = await errorMessage.getText();
     return (errorMessage && errorMessageText == 'Por favor, ingrese un correo electrónico y una contraseña')
}

async function testCredencialesInvalidas(driver){
    const buttonLogin = driver.findElement(By.id('login-button'));

    // Ingresamos un correo electrónico
    const email = driver.findElement(By.id('email'));
    await email.sendKeys('test@test.com');

    await new Promise(resolve => setTimeout(resolve, 200));
    // Ingresamos una contraseña
    const password = driver.findElement(By.id('password'));
    await password.sendKeys('123456');

    await new Promise(resolve => setTimeout(resolve, 200));
    // Click en el boton de login
    await buttonLogin.click();

    await new Promise(resolve => setTimeout(resolve, 300));

    const errorMessage2 = driver.findElement(By.id('error-message'));
    const errorMessageText2 = await errorMessage2.getText();
    return (errorMessage2 && errorMessageText2 == 'Credenciales inválidas')
}

async function testBotonSinCampos(driver){
    const buttonLogin = driver.findElement(By.id('login-button'));
    await buttonLogin.click();

    // Verificamos que el mensaje de error aparezca
    const errorMessage = driver.findElement(By.id('error-message'));
    const errorMessageText = await errorMessage.getText();
    
    return (errorMessage && errorMessageText == 'Por favor, ingrese un correo electrónico y una contraseña')
}

runTest();
