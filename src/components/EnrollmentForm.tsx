import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, User, GraduationCap, Calendar, Clock, CheckCircle2, Upload, FileText } from "lucide-react";
import { APP_CONFIG } from "@/config/environment";
import { generateWhatsAppLink } from "@/config/environment"


interface EnrollmentData {
  // Dados Pessoais (BI Angolano)
  fullName: string;
  biNumber: string;
  birthDate: string;
  birthPlace: string;
  province: string;
  municipality: string;
  address: string;
  phone: string;
  email: string;
  parentName: string; // Para menores
  parentPhone: string; // Para menores
  idDocument: File | null; // Bilhete de Identidade PDF
  
  // Dados Escolares
  currentGrade: string;
  currentCourse: string;
  school: string;
  subjects: string[];
  preferredSchedule: string;
  duration: string;
  startDate: string;
  additionalInfo: string;
}

interface EnrollmentFormProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const EnrollmentForm = ({ open, onOpenChange }: EnrollmentFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Use props if provided, otherwise use internal state
  const dialogOpen = open !== undefined ? open : isOpen;
  const setDialogOpen = onOpenChange || setIsOpen;
  
  const [formData, setFormData] = useState<EnrollmentData>({
    fullName: "",
    biNumber: "",
    birthDate: "",
    birthPlace: "",
    province: "",
    municipality: "",
    address: "",
    phone: "",
    email: "",
    parentName: "",
    parentPhone: "",
    idDocument: null,
    currentGrade: "",
    currentCourse: "",
    school: "",
    subjects: [],
    preferredSchedule: "",
    duration: "",
    startDate: "",
    additionalInfo: ""
  });

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Verificar tipo de arquivo
      if (file.type !== "application/pdf") {
        toast({
          title: "Tipo de arquivo inválido",
          description: "Por favor, selecione apenas arquivos PDF.",
          variant: "destructive"
        });
        return;
      }
      
      // Verificar tamanho do arquivo (5MB max)
      if (file.size > APP_CONFIG.system.fileUpload.maxSize) {
        toast({
          title: "Arquivo muito grande",
          description: "O arquivo deve ter no máximo 5MB.",
          variant: "destructive"
        });
        return;
      }
      
      setSelectedFile(file);
      setFormData(prev => ({ ...prev, idDocument: file }));
      toast({
        title: "Arquivo carregado",
        description: `${file.name} foi carregado com sucesso.`
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubjectChange = (subject: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      subjects: checked 
        ? [...prev.subjects, subject]
        : prev.subjects.filter(s => s !== subject)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //envio para o whatsapp
    const message = `Olá Academia ARC, gostaria de me inscrever no curso com os seguintes dados:
    Nome: ${formData.fullName}
    BI: ${formData.biNumber}
    Data de Nascimento: ${formData.birthDate}
    Local de Nascimento: ${formData.birthPlace}
    Província: ${formData.province}
    Município: ${formData.municipality}
    Endereço: ${formData.address}
    Telefone: ${formData.phone}
    Email: ${formData.email}
    Nome do Responsável: ${formData.parentName}
    Telefone do Responsável: ${formData.parentPhone}
    Ano/Classe Atual: ${formData.currentGrade}
    Curso Atual: ${formData.currentCourse}
    Escola: ${formData.school}
    Disciplinas de Interesse: ${formData.subjects.join(", ")}
    Horário Preferido: ${formData.preferredSchedule}
    Duração: ${formData.duration}
    Data de Início: ${formData.startDate}
    Informações Adicionais: ${formData.additionalInfo}`;
    const whatsappUrl = `${APP_CONFIG.whatsapp.baseUrl}/${APP_CONFIG.academy.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(generateWhatsAppLink(message), "_blank")

    
    // Simular envio do formulário
    toast({
      title: "Inscrição Enviada!",
      description: "Entraremos em contacto consigo em breve para confirmar os detalhes.",
      duration: 5000,
    });
    
    setDialogOpen(false);
    setStep(1);
    setSelectedFile(null);
    setFormData({
      fullName: "",
      biNumber: "",
      birthDate: "",
      birthPlace: "",
      province: "",
      municipality: "",
      address: "",
      phone: "",
      email: "",
      parentName: "",
      parentPhone: "",
      idDocument: null,
      currentGrade: "",
      currentCourse: "",
      school: "",
      subjects: [],
      preferredSchedule: "",
      duration: "",
      startDate: "",
      additionalInfo: ""
    });
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const provinces = [
    "Luanda", "Benguela", "Huambo", "Lobito", "Kuanza Norte", "Kuanza Sul",
    "Malanje", "Lunda Norte", "Lunda Sul", "Moxico", "Uíge", "Zaire",
    "Cabinda", "Huíla", "Namibe", "Cunene", "Cuando Cubango", "Bié"
  ];

  const grades = [
    "7ª Classe", "8ª Classe", "9ª Classe",
    "10ª Classe", "11ª Classe", "12ª Classe", "13ª Classe",
    "Universidade - 1º Ano", "Universidade - 2º Ano", "Universidade - 3º Ano",
    "Universidade - 4º Ano", "Universidade - 5º Ano", "Profissional"
  ];

  const subjects = [
    "Matemática", "Física", "Química", "Biologia", "História", "Geografia",
    "Português", "Inglês", "Francês", "Filosofia", "Informática",
    "Programação", "Desenvolvimento Web", "Redes de Computadores",
    "Design Gráfico", "Marketing Digital", "Contabilidade"
  ];

  const schedules = [
    "Manhã (8h-12h)", "Tarde (14h-18h)", "Noite (18h-22h)",
    "Fins de semana", "Flexível"
  ];

  const durations = [
    "1 mês", "2 meses", "3 meses", "6 meses", "1 ano", "A definir"
  ];

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
   
      
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Formulário de Inscrição - Academia ARC
          </DialogTitle>
        </DialogHeader>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNumber 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {step > stepNumber ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    stepNumber
                  )}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-12 h-0.5 mx-2 ${
                    step > stepNumber ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Step 1: Dados Pessoais */}
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Dados Pessoais (Bilhete de Identidade)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Nome Completo *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="biNumber">Número do BI *</Label>
                    <Input
                      id="biNumber"
                      value={formData.biNumber}
                      onChange={(e) => handleInputChange('biNumber', e.target.value)}
                      placeholder="000000000LA000"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="birthDate">Data de Nascimento *</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => handleInputChange('birthDate', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="birthPlace">Local de Nascimento *</Label>
                    <Input
                      id="birthPlace"
                      value={formData.birthPlace}
                      onChange={(e) => handleInputChange('birthPlace', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="province">Província *</Label>
                    <Select value={formData.province} onValueChange={(value) => handleInputChange('province', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a província" />
                      </SelectTrigger>
                      <SelectContent>
                        {provinces.map(province => (
                          <SelectItem key={province} value={province}>{province}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="municipality">Município *</Label>
                    <Input
                      id="municipality"
                      value={formData.municipality}
                      onChange={(e) => handleInputChange('municipality', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Endereço Completo *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Rua, Bairro, Distrito"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+244 XXX XXX XXX"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                </div>

                {/* Upload do Bilhete de Identidade */}
                <div className="space-y-2">
                  <Label htmlFor="idDocument">Bilhete de Identidade (PDF) *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6">
                    <div className="text-center">
                      {selectedFile ? (
                        <div className="space-y-2">
                          <FileText className="h-8 w-8 text-success mx-auto" />
                          <p className="text-sm font-medium text-foreground">{selectedFile.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setSelectedFile(null);
                              setFormData(prev => ({ ...prev, idDocument: null }));
                              if (fileInputRef.current) {
                                fileInputRef.current.value = "";
                              }
                            }}
                          >
                            Remover arquivo
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Upload className="h-8 w-8 text-muted-foreground mx-auto" />
                          <div>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => fileInputRef.current?.click()}
                            >
                              Selecionar arquivo PDF
                            </Button>
                            <p className="text-xs text-muted-foreground mt-2">
                              Máximo 5MB • Apenas PDF
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                  </div>
                </div>

                {/* Para menores de idade */}
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-3 text-muted-foreground">Para menores de 18 anos (Dados do Responsável)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="parentName">Nome do Responsável</Label>
                      <Input
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) => handleInputChange('parentName', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="parentPhone">Telefone do Responsável</Label>
                      <Input
                        id="parentPhone"
                        type="tel"
                        value={formData.parentPhone}
                        onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Dados Escolares */}
          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Dados Escolares
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="currentGrade">Ano/Classe Atual *</Label>
                    <Select value={formData.currentGrade} onValueChange={(value) => handleInputChange('currentGrade', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o ano/classe" />
                      </SelectTrigger>
                      <SelectContent>
                        {grades.map(grade => (
                          <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="currentCourse">Curso Atual</Label>
                    <Input
                      id="currentCourse"
                      value={formData.currentCourse}
                      onChange={(e) => handleInputChange('currentCourse', e.target.value)}
                      placeholder="Ex: Ciências Físicas e Biológicas, Informática"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="school">Escola/Instituição *</Label>
                  <Input
                    id="school"
                    value={formData.school}
                    onChange={(e) => handleInputChange('school', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label>Disciplinas de Interesse *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                    {subjects.map(subject => (
                      <div key={subject} className="flex items-center space-x-2">
                        <Checkbox
                          id={subject}
                          checked={formData.subjects.includes(subject)}
                          onCheckedChange={(checked) => handleSubjectChange(subject, checked as boolean)}
                        />
                        <Label htmlFor={subject} className="text-sm">{subject}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Preferências de Horário */}
          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Preferências de Horário e Duração
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="preferredSchedule">Horário Preferido *</Label>
                    <Select value={formData.preferredSchedule} onValueChange={(value) => handleInputChange('preferredSchedule', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o horário" />
                      </SelectTrigger>
                      <SelectContent>
                        {schedules.map(schedule => (
                          <SelectItem key={schedule} value={schedule}>{schedule}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="duration">Duração Pretendida *</Label>
                    <Select value={formData.duration} onValueChange={(value) => handleInputChange('duration', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a duração" />
                      </SelectTrigger>
                      <SelectContent>
                        {durations.map(duration => (
                          <SelectItem key={duration} value={duration}>{duration}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="startDate">Data de Início Pretendida</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="additionalInfo">Informações Adicionais</Label>
                  <Textarea
                    id="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                    placeholder="Objetivos específicos, dificuldades, preferências metodológicas..."
                    rows={4}
                  />
                </div>

                {/* Resumo */}
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-3">Resumo da Inscrição</h4>
                  <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-sm">
                    <p><strong>Nome:</strong> {formData.fullName}</p>
                    <p><strong>Ano/Classe:</strong> {formData.currentGrade}</p>
                    <p><strong>Disciplinas:</strong> {formData.subjects.join(', ')}</p>
                    <p><strong>Horário:</strong> {formData.preferredSchedule}</p>
                    <p><strong>Duração:</strong> {formData.duration}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <Button 
              type="button" 
              variant="outline" 
              onClick={prevStep}
              disabled={step === 1}
            >
              Anterior
            </Button>
            
            {step < 3 ? (
              <Button 
                type="button" 
                onClick={nextStep}
                disabled={
                  (step === 1 && (!formData.fullName || !formData.biNumber || !formData.birthDate || !formData.birthPlace || !formData.province || !formData.municipality || !formData.address || !formData.phone)) ||
                  (step === 2 && (!formData.currentGrade || !formData.school || formData.subjects.length === 0))
                }
              >
                Próximo
              </Button>
            ) : (
              <Button 
                type="submit"
                disabled={!formData.preferredSchedule || !formData.duration}
              >
                Submeter Inscrição
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentForm;