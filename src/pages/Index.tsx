import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">WebStudio</div>
          <div className="hidden md:flex gap-8">
            {["Преимущества", "Тарифы", "Портфолио", "Отзывы", "Контакты"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <Button onClick={() => scrollToSection("контакты")}>Связаться</Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="https://cdn.poehali.dev/projects/9a11e698-4541-4145-8a7d-14bed6260bed/files/acc389b5-8bb6-427e-9f4c-6d9f4be9c9c6.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4">Разработка с 2020 года</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Создаём сайты, которые <span className="text-primary">работают на результат</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Современные лендинги, корпоративные порталы и интернет-магазины под ключ
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection("контакты")}>
                  Обсудить проект
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("портфолио")}>
                  Портфолио
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/projects/9a11e698-4541-4145-8a7d-14bed6260bed/files/e813e2c9-2ab7-4751-aa37-e7c62be4a31f.jpg" 
                  alt="Рабочее пространство веб-разработчика" 
                  className="rounded-2xl shadow-2xl w-full h-auto hover-scale"
                />
                <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Award" className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">5 лет</div>
                      <div className="text-sm text-muted-foreground">на рынке</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="преимущества" className="py-20 px-4 bg-white relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Почему мы</Badge>
            <h2 className="text-4xl font-bold mb-4">Преимущества работы с нами</h2>
            <p className="text-xl text-muted-foreground">Всё, что нужно для успешного проекта</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "Zap", title: "Быстрая разработка", description: "Запускаем проекты за 2-4 недели без потери качества" },
              { icon: "Shield", title: "Гарантия качества", description: "12 месяцев бесплатной поддержки и исправлений" },
              { icon: "Sparkles", title: "Современный дизайн", description: "Актуальные тренды и адаптация под все устройства" },
              { icon: "TrendingUp", title: "SEO-оптимизация", description: "Встроенная оптимизация для поисковых систем" },
              { icon: "Lock", title: "Безопасность", description: "SSL-сертификаты и защита от взлома" },
              { icon: "Headphones", title: "Поддержка 24/7", description: "Всегда на связи в удобном мессенджере" },
            ].map((item, index) => (
              <Card key={index} className="hover-scale hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="тарифы" className="py-20 px-4 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Прозрачные цены</Badge>
            <h2 className="text-4xl font-bold mb-4">Тарифные планы</h2>
            <p className="text-xl text-muted-foreground">Выберите подходящий вариант для вашего бизнеса</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Стартовый",
                price: "от 50 000 ₽",
                description: "Для малого бизнеса",
                features: ["Лендинг до 5 блоков", "Адаптивный дизайн", "Форма обратной связи", "SEO-оптимизация", "1 месяц поддержки"],
              },
              {
                name: "Бизнес",
                price: "от 120 000 ₽",
                description: "Для среднего бизнеса",
                features: ["Многостраничный сайт", "Корпоративный дизайн", "CMS для управления", "Интеграция с CRM", "6 месяцев поддержки"],
                featured: true,
              },
              {
                name: "Корпоративный",
                price: "от 250 000 ₽",
                description: "Для крупного бизнеса",
                features: ["Индивидуальная разработка", "Интернет-магазин", "Личный кабинет", "API интеграции", "12 месяцев поддержки"],
              },
            ].map((plan, index) => (
              <Card key={index} className={`hover-scale transition-all ${plan.featured ? "border-primary shadow-xl scale-105" : ""}`}>
                <CardHeader>
                  {plan.featured && <Badge className="mb-2 w-fit">Популярный</Badge>}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={plan.featured ? "default" : "outline"} onClick={() => scrollToSection("контакты")}>
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Прозрачный процесс</Badge>
            <h2 className="text-4xl font-bold mb-4">Этапы разработки</h2>
            <p className="text-xl text-muted-foreground">Как мы работаем над вашим проектом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { step: "01", title: "Анализ и планирование", description: "Изучаем ваш бизнес, конкурентов и целевую аудиторию. Составляем техническое задание и план проекта." },
              { step: "02", title: "Дизайн и прототипирование", description: "Создаём макеты в Figma, согласовываем каждый экран. Разрабатываем UI/UX для максимальной конверсии." },
              { step: "03", title: "Разработка и тестирование", description: "Пишем чистый код, интегрируем необходимые сервисы. Проводим тестирование на всех устройствах." },
              { step: "04", title: "Запуск и поддержка", description: "Размещаем сайт на хостинге, настраиваем аналитику. Обучаем работе с сайтом и обеспечиваем поддержку." },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center text-2xl font-bold">{item.step}</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 px-4 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наши работы</Badge>
            <h2 className="text-4xl font-bold mb-4">Портфолио проектов</h2>
            <p className="text-xl text-muted-foreground">Реализованные решения для бизнеса</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Интернет-магазин электроники", category: "E-commerce", tech: "React, Node.js", image: "https://cdn.poehali.dev/projects/9a11e698-4541-4145-8a7d-14bed6260bed/files/e813e2c9-2ab7-4751-aa37-e7c62be4a31f.jpg" },
              { title: "Корпоративный портал банка", category: "Финансы", tech: "Next.js, PostgreSQL", image: "https://cdn.poehali.dev/projects/9a11e698-4541-4145-8a7d-14bed6260bed/files/6a855f92-c44c-477a-9341-0a8e1663bdb8.jpg" },
              { title: "Лендинг строительной компании", category: "Строительство", tech: "React, Tailwind", image: "https://cdn.poehali.dev/projects/9a11e698-4541-4145-8a7d-14bed6260bed/files/e813e2c9-2ab7-4751-aa37-e7c62be4a31f.jpg" },
              { title: "CRM-система для логистики", category: "Логистика", tech: "React, Express", image: "https://cdn.poehali.dev/projects/9a11e698-4541-4145-8a7d-14bed6260bed/files/6a855f92-c44c-477a-9341-0a8e1663bdb8.jpg" },
              { title: "Маркетплейс услуг", category: "Сервисы", tech: "React, MongoDB", image: "https://cdn.poehali.dev/projects/9a11e698-4541-4145-8a7d-14bed6260bed/files/e813e2c9-2ab7-4751-aa37-e7c62be4a31f.jpg" },
              { title: "Образовательная платформа", category: "Образование", tech: "React, WebRTC", image: "https://cdn.poehali.dev/projects/9a11e698-4541-4145-8a7d-14bed6260bed/files/6a855f92-c44c-477a-9341-0a8e1663bdb8.jpg" },
            ].map((project, index) => (
              <Card key={index} className="hover-scale hover:shadow-xl transition-all overflow-hidden group">
                <div className="h-48 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2">{project.category}</Badge>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{project.tech}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4">Доверие</Badge>
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">Что говорят о качестве нашей работы</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Опыт команды", value: "15+ лет", description: "Суммарный опыт разработки наших специалистов" },
              { title: "Скорость работы", value: "2-4 недели", description: "Средний срок разработки типового проекта" },
              { title: "Клиентская база", value: "150+ компаний", description: "Успешно реализованных проектов за 5 лет" },
              { title: "Возвращаемость", value: "85%", description: "Клиентов обращаются к нам повторно" },
            ].map((stat, index) => (
              <Card key={index} className="text-center hover-scale hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <CardTitle className="text-xl">{stat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{stat.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы о разработке</p>
          </div>
          <Accordion type="single" collapsible className="bg-white rounded-xl p-6 shadow-lg">
            {[
              {
                question: "Сколько стоит разработка сайта?",
                answer: "Стоимость зависит от сложности проекта. Простой лендинг от 50 000 ₽, корпоративный сайт от 120 000 ₽, интернет-магазин от 250 000 ₽. Для точной оценки нужно обсудить ваши требования.",
              },
              {
                question: "Какие сроки разработки?",
                answer: "Лендинг создаём за 2 недели, корпоративный сайт за 3-4 недели, интернет-магазин за 6-8 недель. Срочные проекты обсуждаются индивидуально с наценкой 30%.",
              },
              {
                question: "Предоставляете ли гарантию?",
                answer: "Да, мы даём гарантию 12 месяцев на все наши проекты. В течение этого периода бесплатно исправляем любые ошибки и баги, возникшие не по вине клиента.",
              },
              {
                question: "Можно ли самому редактировать контент?",
                answer: "Конечно! Мы устанавливаем удобную CMS-систему и обучаем вашу команду работе с ней. После обучения вы сможете самостоятельно добавлять статьи, товары и редактировать тексты.",
              },
              {
                question: "Какая поддержка после запуска?",
                answer: "Первый месяц поддержка включена в стоимость. Далее можно подключить абонентское обслуживание от 10 000 ₽/мес или оплачивать работы по факту от 3 000 ₽/час.",
              },
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl font-bold mb-4">Что говорят клиенты</h2>
            <p className="text-xl text-muted-foreground">Реальные отзывы о нашей работе</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Алексей Иванов",
                position: "Директор ООО «СтройМастер»",
                text: "Отличная команда! Сделали лендинг за 10 дней, количество заявок выросло в 3 раза. Особенно понравилась оперативность и внимание к деталям.",
                rating: 5,
                avatar: "AI",
              },
              {
                name: "Мария Петрова",
                position: "Владелец интернет-магазина",
                text: "Разработали магазин на 5000+ товаров. Всё работает быстро, удобная админка. Спасибо за качественную работу и поддержку после запуска!",
                rating: 5,
                avatar: "МП",
              },
              {
                name: "Дмитрий Соколов",
                position: "Маркетолог финтех-стартапа",
                text: "Ребята реализовали сложный проект с нестандартными требованиями. Всё в срок, профессионально, с пониманием наших бизнес-задач.",
                rating: 5,
                avatar: "ДС",
              },
            ].map((review, index) => (
              <Card key={index} className="hover-scale hover:shadow-lg transition-all relative z-10">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {review.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.position}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={18} />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">«{review.text}»</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Обсудим ваш проект?</h2>
            <p className="text-xl text-primary-foreground/90">Оставьте заявку, и мы свяжемся в течение 30 минут</p>
          </div>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Расскажите о вашем проекте"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-32"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Отправить заявку
                </Button>
                <p className="text-xs text-center text-muted-foreground">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">WebStudio</div>
              <p className="text-sm text-muted-foreground">Разработка современных веб-решений для вашего бизнеса</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Лендинги</li>
                <li>Корпоративные сайты</li>
                <li>Интернет-магазины</li>
                <li>Веб-приложения</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@webstudio.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © 2024 WebStudio. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;