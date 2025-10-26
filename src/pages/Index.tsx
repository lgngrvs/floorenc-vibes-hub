import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import lecture1 from "@/assets/lecture-1.jpg";
import lecture2 from "@/assets/lecture-2.jpg";
import lecture3 from "@/assets/lecture-3.jpg";
import lecture4 from "@/assets/lecture-4.jpg";
import lecture5 from "@/assets/lecture-5.jpg";

const Index = () => {
  const schedule = [
    { week: 1, theme: "Light", speakers: ["Dr. Sarah Chen - 'Photons & Philosophy'", "Marcus Williams - 'Illuminating Darkness'"] },
    { week: 2, theme: "God", speakers: ["Rev. James Park - 'Faith in Modern Times'", "Prof. Aisha Rahman - 'Secular Spirituality'"] },
    { week: 3, theme: "Machines", speakers: ["Dr. Kevin Zhang - 'AI & Consciousness'", "Emma Rodriguez - 'Cyborg Futures'"] },
    { week: 4, theme: "The Erotic", speakers: ["Prof. Isabella Cruz - 'Desire & Society'", "Alex Thompson - 'Art of Intimacy'"] },
    { week: 5, theme: "Memory", speakers: ["Dr. Rachel Goldman - 'Neuroscience of Nostalgia'", "David Kim - 'Collective Memory'"] },
    { week: 6, theme: "Violence", speakers: ["Prof. Michael O'Brien - 'Ethics of Conflict'", "Sophia Patel - 'Nonviolent Resistance'"] },
    { week: 7, theme: "Beauty", speakers: ["Dr. Yuki Tanaka - 'Aesthetics Across Cultures'", "Jordan Lee - 'Ugly Beauty'"] },
    { week: 8, theme: "Time", speakers: ["Prof. Elena Volkov - 'Temporal Paradoxes'", "Chris Anderson - 'Living in the Present'"] },
    { week: 9, theme: "Power", speakers: ["Dr. Omar Hassan - 'Structures of Authority'", "Maya Johnson - 'Empowerment & Change'"] },
    { week: 10, theme: "Mystery", speakers: ["Prof. Luna Martinez - 'The Unknown Unknown'", "Sam Foster - 'Embracing Uncertainty'"] },
  ];

  const photos = [lecture1, lecture2, lecture3, lecture4, lecture5, lecture1, lecture2];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="font-serif text-6xl md:text-8xl font-black mb-6 text-foreground tracking-tight">
            STANFORD DORM LECTURES
          </h1>
          <div className="inline-block bg-card px-8 py-4 rounded-lg shadow-[var(--shadow-elegant)] border-2 border-primary">
            <p className="font-serif-body text-xl md:text-2xl font-bold text-foreground">
              Every Sunday Night • Faizan Lounge • Florence Moore
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <Card className="p-8 md:p-12 bg-card border-2 border-border shadow-[var(--shadow-elegant)]">
          <h2 className="font-serif text-4xl md:text-5xl font-black mb-6 text-primary">What We're About</h2>
          <div className="space-y-4 font-serif-body text-lg">
            <p className="text-foreground/90 leading-relaxed">
              Stanford Dorm Lectures is a student-run intellectual community that transforms Sunday evenings into spaces for deep thinking, wild ideas, and genuine conversation. We gather in Faizan Lounge to explore life's biggest questions through the lens of weekly themes that matter.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Our mission is simple: create a space where curiosity thrives, where undergraduate and graduate students can present their passions, research, and provocative ideas in an intimate setting. No stuffy formality—just authentic intellectual exchange over snacks and good company.
            </p>
            <div className="inline-block mt-4 bg-accent/10 px-6 py-3 rounded border border-accent">
              <p className="font-bold text-foreground">🧠 Think deeply. 💬 Speak freely. 🤝 Connect genuinely.</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Schedule Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl md:text-6xl font-black text-primary mb-4">
            WINTER QUARTER 2025
          </h2>
          <p className="font-serif-body text-xl text-muted-foreground mt-4">10 weeks • 10 themes • countless insights</p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          {schedule.map((item) => (
            <Card
              key={item.week}
              className={`p-6 bg-card border-2 border-border hover:border-primary transition-colors duration-300 shadow-[var(--shadow-elegant)] ${item.week <= 5 ? 'opacity-60' : ''}`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-16 h-16 ${item.week <= 5 ? 'bg-muted' : 'bg-primary'} rounded-lg flex items-center justify-center shadow-sm`}>
                  <span className={`font-serif text-2xl font-black ${item.week <= 5 ? 'text-muted-foreground line-through' : 'text-primary-foreground'}`}>{item.week}</span>
                </div>
                <div className="flex-1">
                  <h3 className={`font-serif text-2xl font-black mb-3 uppercase tracking-wide ${item.week <= 5 ? 'text-muted-foreground line-through' : 'text-foreground'}`}>{item.theme}</h3>
                  <ul className="space-y-2">
                    {item.speakers.map((speaker, idx) => (
                      <li key={idx} className={`font-serif-body text-sm flex items-start ${item.week <= 5 ? 'text-muted-foreground/60 line-through' : 'text-muted-foreground'}`}>
                        <span className="mr-2 text-primary font-bold">→</span>
                        <span>{speaker}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl md:text-6xl font-black text-accent mb-2">
            FAQ
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border-2 border-primary rounded-lg px-6 bg-card">
            <AccordionTrigger className="font-serif text-xl font-bold text-foreground hover:text-primary">
              What makes a good lecture?
            </AccordionTrigger>
            <AccordionContent className="font-serif-body text-muted-foreground space-y-3 pt-4">
              <p className="leading-relaxed">
                A great Dorm Lecture isn't about being the perfect public speaker—it's about sharing something you genuinely care about. The best talks come from personal passion, whether that's your research, a philosophical question that keeps you up at night, or a cultural phenomenon you can't stop thinking about.
              </p>
              <p className="leading-relaxed">
                <strong>Key ingredients:</strong> Authenticity over polish. Ideas over credentials. Conversation over monologue. We love talks that make us think differently, that challenge our assumptions, or that open doors to new ways of seeing the world. Aim for 20-30 minutes with time for Q&A.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-2 border-secondary rounded-lg px-6 bg-card">
            <AccordionTrigger className="font-serif text-xl font-bold text-foreground hover:text-secondary">
              Who can attend?
            </AccordionTrigger>
            <AccordionContent className="font-serif-body text-muted-foreground pt-4">
              Anyone from the Stanford community! We welcome undergrads, grad students, and anyone curious enough to show up. Come for the ideas, stay for the snacks and conversations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-2 border-accent rounded-lg px-6 bg-card">
            <AccordionTrigger className="font-serif text-xl font-bold text-foreground hover:text-accent">
              How do I give a lecture?
            </AccordionTrigger>
            <AccordionContent className="font-serif-body text-muted-foreground pt-4">
              Reach out to our organizing team! We're always looking for passionate speakers. Whether you want to present your thesis research, share a wild theory, or lead a discussion on a theme that fascinates you—we'd love to hear from you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-2 border-primary rounded-lg px-6 bg-card">
            <AccordionTrigger className="font-serif text-xl font-bold text-foreground hover:text-primary">
              What's the vibe like?
            </AccordionTrigger>
            <AccordionContent className="font-serif-body text-muted-foreground pt-4">
              Think cozy, informal, and intellectually electric. Picture this: dimmed lights, students sprawled on couches and sitting on the floor, snacks being passed around, and ideas flowing freely. It's TED Talk meets late-night dorm conversation.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 px-4 md:px-8 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl md:text-6xl font-black text-secondary mb-2">
            MEMORIES
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 animate-slide-left hover:[animation-play-state:paused]">
            {[...photos, ...photos].map((photo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[400px] h-[300px] rounded-lg overflow-hidden border-2 border-border shadow-[var(--shadow-elegant)] hover:scale-105 transition-transform duration-300 hover:border-primary"
              >
                <img
                  src={photo}
                  alt={`Lecture memory ${(idx % photos.length) + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <p className="font-serif-body text-lg font-bold text-foreground mb-2">📍 Faizan Lounge, Florence Moore Hall</p>
          <p className="font-serif-body text-lg font-bold text-foreground mb-6">⏰ Every Sunday, 7:00 PM</p>
          <p className="font-serif-body text-muted-foreground">
            A student-run lecture series at Stanford University
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
