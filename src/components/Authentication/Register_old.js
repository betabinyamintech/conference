import { Form, Input, Button, Alert } from 'antd';
import { useState } from 'react';
import { getUserDetails, register } from '../../actions/auth';

export const PhoneRegister = () => {
   
    return (
        <div>
            {error}
            {error && <Alert type="error">{error}</Alert>}
            <Form
                onFinish={handleRegister}
            >
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'כתובת לא תקינה',
                        },
                        {
                            required: true,
                            message: 'הכנס כתובת אימייל',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="סיסמא"
                    rules={[
                        {
                            required: true,
                            message: 'בחר סיסמא!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="אשר סיסמא"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'הכנס שוב את הסיסמא שבחרת',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('הסיסמאות אינן תואמות! נסה שוב'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="name"
                    label="שם מלא"
                    tooltip="שם פרטי ושם משפחה"
                    rules={[{ required: true, message: 'הכנס שם מלא', whitespace: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="טלפון"
                    tooltip="מספר טלפון ליצירת קשר ואימות סיסמא"
                    rules={[{ required: true, message: 'הכנס מספר טלפון', whitespace: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" >
                        הירשם
                    </Button>
                </Form.Item>
            </Form>
        </div>)
}