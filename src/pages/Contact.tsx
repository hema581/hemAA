import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "الهاتف",
      details: "+20 123 456 7890",
      description: "اتصل أو أرسل رسالة في أي وقت"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "الواتساب",
      details: "+20 123 456 7890",
      description: "استجابة سريعة مضمونة"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "البريد الإلكتروني",
      details: "ahmed.elhelwany@email.com",
      description: "للاستفسارات المهنية"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "الموقع",
      details: "القاهرة، مصر",
      description: "جلسات حضورية متاحة"
    }
  ];

  const availability = [
    { day: "الأحد - الخميس", time: "3:00 م - 10:00 م" },
    { day: "الجمعة", time: "9:00 ص - 6:00 م" },
    { day: "السبت", time: "9:00 ص - 8:00 م" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            تواصل معنا
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مستعد لبدء رحلتك الرياضية؟ تواصل معي اليوم لجدولة استشارتك المجانية 
            واكتشف كيف يمكن للتدريس المخصص أن يحول فهمك للرياضيات.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="p-6 mb-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">معلومات التواصل</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4 space-x-reverse">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{info.title}</h3>
                        <p className="text-foreground font-medium text-lg">{info.details}</p>
                        <p className="text-base text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl flex items-center">
                  <Clock className="w-6 h-6 ml-3 text-primary" />
                  أوقات التوفر
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {availability.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-accent last:border-b-0">
                      <span className="font-medium text-lg">{schedule.day}</span>
                      <span className="text-muted-foreground text-lg">{schedule.time}</span>
                    </div>
                  ))}
                </div>
                <p className="text-base text-muted-foreground mt-4 leading-relaxed">
                  جميع الأوقات بتوقيت القاهرة (GMT+2). يمكن ترتيب الجلسات الأونلاين للمناطق الزمنية الأخرى.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">أرسل رسالة</CardTitle>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  املأ النموذج أدناه وسأرد عليك خلال 24 ساعة.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-lg">الاسم الأول *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="أدخل اسمك الأول"
                        className="mt-2 text-lg p-3"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-lg">اسم العائلة *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="أدخل اسم العائلة"
                        className="mt-2 text-lg p-3"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-lg">البريد الإلكتروني *</Label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="your.email@example.com"
                        className="mt-2 text-lg p-3"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-lg">رقم الهاتف</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        placeholder="+20 123 456 7890"
                        className="mt-2 text-lg p-3"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="studentLevel" className="text-lg">مستوى الطالب *</Label>
                    <select 
                      id="studentLevel"
                      className="w-full mt-2 px-3 py-3 text-lg border border-input rounded-md bg-background"
                    >
                      <option value="">اختر مستوى الطالب</option>
                      <option value="preparatory">إعدادي (الصفوف 7-9)</option>
                      <option value="secondary">ثانوي (الصفوف 10-12)</option>
                      <option value="ig">الشهادة العامة الدولية (IG)</option>
                      <option value="sat">تحضير SAT</option>
                      <option value="other">آخر</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="sessionType" className="text-lg">نوع الجلسة المفضل</Label>
                    <select 
                      id="sessionType"
                      className="w-full mt-2 px-3 py-3 text-lg border border-input rounded-md bg-background"
                    >
                      <option value="">اختر نوع الجلسة</option>
                      <option value="online">جلسات أونلاين</option>
                      <option value="in-person">جلسات حضورية</option>
                      <option value="both">كلا الخيارين</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-lg">الرسالة *</Label>
                    <Textarea 
                      id="message"
                      placeholder="أخبرني عن أهدافك الرياضية والتحديات الحالية أو أي مواضيع محددة تريد التركيز عليها..."
                      className="mt-2 min-h-[120px] text-lg p-3"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" size="lg" className="flex-1 text-lg py-4">
                      أرسل الرسالة
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="lg"
                      className="flex-1 text-lg py-4"
                      onClick={() => window.open('https://wa.me/+201234567890?text=السلام عليكم أستاذ أحمد! أنا مهتم بدروس الرياضيات.', '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 ml-2" />
                      واتساب بدلاً من ذلك
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-primary text-primary-foreground">
            <CardContent className="pt-0">
              <h2 className="text-2xl font-bold mb-4">تحتاج مساعدة فورية؟</h2>
              <p className="mb-6 opacity-90 text-lg leading-relaxed">
                للأسئلة الرياضية العاجلة أو لجدولة استشارة فورية، 
                تواصل معي مباشرة عبر الواتساب للحصول على أسرع استجابة.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-4"
                onClick={() => window.open('https://wa.me/+201234567890?text=السلام عليكم أستاذ أحمد! أحتاج مساعدة فورية في الرياضيات.', '_blank')}
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                تواصل عبر الواتساب الآن
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl flex items-center">
                <MapPin className="w-6 h-6 ml-3 text-primary" />
                الموقع والجلسات الحضورية
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-accent/30 rounded-lg p-8 text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">القاهرة، مصر</h3>
                <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                  جلسات تدريس حضورية متاحة في مواقع مريحة في أنحاء القاهرة. 
                  سيتم تأكيد موقع اللقاء الدقيق عند الحجز.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  الجلسات الأونلاين متاحة للطلاب في مصر والسعودية والإمارات والكويت ودول الخليج الأخرى.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;