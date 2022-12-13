from django.test import TestCase

class TestCalls(TestCase):
    def test_call_view_deny_anonymous(self):
        response = self.client.get('/url/to/view', follow=True)
        self.assertRedirects(response, '/login/')
        response = self.client.post('/url/to/view', follow=True)
        self.assertRedirects(response, '/login/')

    def test_call_view_load(self):
        self.client.login(username='user', password='test')
        response = self.client.get('/url/to/view')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'conversation.html')

    def test_call_view_fail_blank(self):
        self.client.login(username='user', password='test')
        response = self.client.post('/url/to/view', {})
        self.assertFormError(response, 'form', 'some_field', 'This field is required.')
       

    def test_call_view_fail_invalid(self):
        self.client.login(username='user', password='test')
        response = self.client.post('/url/to/view', {})
        self.assertFormError(response, 'form', 'some_field', 'This field is required.')

    def test_call_view_success_invalid(self):
        self.client.login(username='user', password='test')
        response = self.client.post('/url/to/view', {})
        self.assertRedirects(response, '/contact/1/calls/')
