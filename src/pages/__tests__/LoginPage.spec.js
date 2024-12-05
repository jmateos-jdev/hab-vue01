import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import LoginPage from '@/pages/LoginPage.vue';
import { describe, test, expect, beforeAll, afterAll } from 'vitest';

describe('LoginPage', () => {
    //creamos variable para todos los test y le damos valor en el beforeEach
    let wrapper;

    beforeAll(() => {
        setActivePinia(createPinia());
        wrapper = mount(LoginPage);
    });

    afterAll(() => {
        wrapper.unmount();
    });
    
    test('renders correctly', async () => {
        expect(wrapper.exists()).toBe(true);

        const form = wrapper.find('form');
        expect(form.exists()).toBe(true);

        const emailInput = wrapper.find('input[type="email"]');
        expect(emailInput.exists()).toBe(true);

        const passwordInput = wrapper.find('input[type="password"]');
        expect(passwordInput.exists()).toBe(true);
        
        const button = wrapper.find('button');
        expect(button.exists()).toBe(true);
        expect(button.text()).toBe('Iniciar sesión');

        await emailInput.setValue('test@test.com');
        await passwordInput.setValue('123456');
        await button.trigger('click');

        await new Promise(resolve => setTimeout(resolve, 2000));

        const errorMessage = wrapper.find('#error-message');
        expect(errorMessage.exists()).toBe(true);
        expect(errorMessage.text()).toBe('Credenciales inválidas');
    });


});
