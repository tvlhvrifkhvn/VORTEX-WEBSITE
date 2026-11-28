"use client";

import { useState } from "react";
import { sg } from "@/content/styleguide";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SegmentedTabs, Tabs, TabsContent } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { Checkbox, Radio } from "@/components/ui/choice";
import { Button } from "@/components/ui/button";
import { ScrambleNumber } from "@/components/motion/scramble-number";

export function Interactive() {
  const [tab, setTab] = useState("01");
  const [hours, setHours] = useState([20]);
  const f = sg.form;
  return (
    <div className="grid-vx gap-y-16">
      <div className="col-span-4 md:col-span-8 lg:col-span-6">
        <p className="label-mono mb-4 text-muted-foreground">ACCORDION</p>
        <Accordion type="single" collapsible className="border-t border-border">
          {sg.faq.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="col-span-4 flex flex-col gap-10 md:col-span-8 lg:col-span-5 lg:col-start-8">
        <Tabs value={tab} onValueChange={setTab}>
          <p className="label-mono mb-4 text-muted-foreground">SEGMENTED TABS</p>
          <SegmentedTabs items={sg.tabs} value={tab} label="File" />
          {sg.tabs.map((t) => (
            <TabsContent key={t.value} value={t.value} className="label-mono mt-4">
              PANEL {t.label}
            </TabsContent>
          ))}
        </Tabs>

        <div>
          <p id="sg-hours" className="label-mono mb-2 text-muted-foreground">RANGE SLIDER · HOURS/WEEK</p>
          <ScrambleNumber value={hours[0]} suffix=" HRS" className="text-h2 font-semibold" />
          <Slider aria-labelledby="sg-hours" value={hours} onValueChange={setHours} min={5} max={60} step={5} />
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" arrow={false}>{sg.dialog.open}</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle className="text-h3 font-semibold">{sg.dialog.title}</DialogTitle>
            <DialogDescription className="mt-4 text-muted-foreground">{sg.dialog.body}</DialogDescription>
          </DialogContent>
        </Dialog>
      </div>

      <form noValidate className="col-span-4 flex flex-col gap-6 md:col-span-8 lg:col-span-6" onSubmit={(e) => e.preventDefault()}>
        <p className="label-mono text-muted-foreground">FORM FIELDS · DEFAULT + ERROR</p>
        <Field id="sg-name" label={f.name} required>
          {(d, inv) => <Input id="sg-name" name="name" required aria-describedby={d} aria-invalid={inv || undefined} />}
        </Field>
        <Field id="sg-email" label={f.email} required error={f.emailError}>
          {(d, inv) => <Input id="sg-email" type="email" defaultValue="name@" aria-describedby={d} aria-invalid={inv || undefined} />}
        </Field>
        <Field id="sg-role" label={f.role}>
          {(d) => (
            <Select id="sg-role" aria-describedby={d} defaultValue="">
              <option value="" disabled>—</option>
              {f.roles.map((r) => <option key={r}>{r}</option>)}
            </Select>
          )}
        </Field>
        <Field id="sg-msg" label={f.message} optionalLabel={f.optional} hint={f.hint}>
          {(d) => <Textarea id="sg-msg" aria-describedby={d} />}
        </Field>
        <fieldset>
          <legend className="label-mono">{f.role}</legend>
          {f.roles.map((r, i) => <Radio key={r} name="sg-radio" value={r} label={r} defaultChecked={i === 0} />)}
        </fieldset>
        <Checkbox label={f.consent} />
        <Button type="submit" className="self-start">{f.submit}</Button>
      </form>
    </div>
  );
}
